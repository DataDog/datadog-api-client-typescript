import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  ModelTypingInfo,
  logger,
} from "./";

const primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
];

const ARRAY_PREFIX = "Array<";
const MAP_PREFIX = "{ [key: string]: ";
const TUPLE_PREFIX = "[";

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0,
};

/**
 * Normalize media type
 *
 * We currently do not handle any media types attributes, i.e. anything
 * after a semicolon. All content is assumed to be UTF-8 compatible.
 */
export function normalizeMediaType(
  mediaType: string | undefined,
): string | undefined {
  if (mediaType === undefined) {
    return undefined;
  }
  return mediaType.split(";")[0].trim().toLowerCase();
}

/**
 * From a list of possible media types, choose the one we can handle best.
 *
 * The order of the given media types does not have any impact on the choice
 * made.
 */
export function getPreferredMediaType(mediaTypes: string[]): string {
  /** According to OAS 3 we should default to json */
  if (!mediaTypes) {
    return "application/json";
  }

  const normalMediaTypes = mediaTypes.map(normalizeMediaType);
  let selectedMediaType: string | undefined = undefined;
  let selectedRank = -Infinity;
  for (const mediaType of normalMediaTypes) {
    if (mediaType === undefined) {
      continue;
    }
    const supported = supportedMediaTypes[mediaType];
    if (supported !== undefined && supported > selectedRank) {
      selectedMediaType = mediaType;
      selectedRank = supported;
    }
  }

  if (selectedMediaType === undefined) {
    throw new Error(
      "None of the given media types are supported: " + mediaTypes.join(", "),
    );
  }

  return selectedMediaType;
}

/**
 * Convert data to a string according the given media type
 */
export function stringify(data: any, mediaType: string): string {
  if (mediaType === "application/json" || mediaType === "text/json") {
    return JSON.stringify(data);
  }

  throw new Error(
    "The mediaType " +
      mediaType +
      " is not supported by ObjectSerializer.stringify.",
  );
}

/**
 * Parse data from a string according to the given media type
 */
export function parse(rawData: string, mediaType: string | undefined): any {
  try {
    return JSON.parse(rawData);
  } catch (error) {
    logger.debug(`could not parse ${mediaType}: ${error}`);
    return rawData;
  }
}

export function serialize(
  data: any,
  typingInfo: ModelTypingInfo,
  type: string,
  format: string,
): any {
  if (data == undefined || type === "any") {
    return data;
  } else if (data instanceof UnparsedObject) {
    return data._data;
  } else if (
    primitives.includes(type.toLowerCase()) &&
    typeof data == type.toLowerCase()
  ) {
    return data;
  } else if (type.startsWith(ARRAY_PREFIX)) {
    if (!Array.isArray(data)) {
      throw new TypeError(`mismatch types '${data}' and '${type}'`);
    }
    // Array<Type> => Type
    const subType: string = type.substring(
      ARRAY_PREFIX.length,
      type.length - 1,
    );
    const transformedData: any[] = [];
    for (const element of data) {
      transformedData.push(serialize(element, typingInfo, subType, format));
    }
    return transformedData;
  } else if (type.startsWith(TUPLE_PREFIX)) {
    // We only support homegeneus tuples
    const subType: string = type
      .substring(TUPLE_PREFIX.length, type.length - 1)
      .split(", ")[0];
    const transformedData: any[] = [];
    for (const element of data) {
      transformedData.push(serialize(element, typingInfo, subType, format));
    }
    return transformedData;
  } else if (type.startsWith(MAP_PREFIX)) {
    // { [key: string]: Type; } => Type
    const subType: string = type.substring(MAP_PREFIX.length, type.length - 3);
    const transformedData: { [key: string]: any } = {};
    for (const key in data) {
      transformedData[key] = serialize(data[key], typingInfo, subType, format);
    }
    return transformedData;
  } else if (type === "Date") {
    if ("string" == typeof data) {
      return data;
    }
    if (format === "date" || format === "date-time") {
      return dateToRFC3339String(data);
    } else {
      return data.toISOString();
    }
  } else {
    if (typingInfo.enumsMap[type]) {
      if (typingInfo.enumsMap[type].includes(data)) {
        return data;
      }
      throw new TypeError(`unknown enum value '${data}'`);
    }
    if (typingInfo.oneOfMap[type]) {
      const oneOfs: any[] = [];
      for (const oneOf of typingInfo.oneOfMap[type]) {
        try {
          oneOfs.push(serialize(data, typingInfo, oneOf, format));
        } catch (e) {
          logger.debug(`could not serialize ${oneOf} (${e})`);
        }
      }
      if (oneOfs.length > 1) {
        throw new TypeError(
          `${data} matches multiple types from ${typingInfo.oneOfMap[type]} ${oneOfs}`,
        );
      }
      if (oneOfs.length === 0) {
        throw new TypeError(
          `${data} doesn't match any type from ${typingInfo.oneOfMap[type]} ${oneOfs}`,
        );
      }
      return oneOfs[0];
    }

    if (!typingInfo.typeMap[type]) {
      // dont know the type
      throw new TypeError(`unknown type '${type}'`);
    }

    // get the map for the correct type.
    const attributesMap = typingInfo.typeMap[type].getAttributeTypeMap();
    const instance: { [index: string]: any } = {};

    for (const attributeName in data) {
      const attributeObj = attributesMap[attributeName];
      if (
        attributeName === "_unparsed" ||
        attributeName === "additionalProperties"
      ) {
        continue;
      } else if (
        attributeObj === undefined &&
        !("additionalProperties" in attributesMap)
      ) {
        throw new Error(
          "unexpected attribute " + attributeName + " of type " + type,
        );
      } else if (attributeObj) {
        instance[attributeObj.baseName] = serialize(
          data[attributeName],
          typingInfo,
          attributeObj.type,
          attributeObj.format,
        );
      }
    }

    if (data.additionalProperties) {
      const additionalPropertiesMap = attributesMap["additionalProperties"];
      if (additionalPropertiesMap) {
        const additionalProperties: any = serialize(
          data.additionalProperties,
          typingInfo,
          additionalPropertiesMap.type,
          additionalPropertiesMap.format,
        );
        for (const key in additionalProperties) {
          instance[key] = additionalProperties[key];
        }
      } else {
        throw new Error(`additionalProperties found in ${type}`);
      }
    }

    // check for required properties
    for (const attributeName in attributesMap) {
      const attributeObj = attributesMap[attributeName];
      if (
        attributeObj?.required &&
        instance[attributeObj.baseName] === undefined
      ) {
        throw new Error(`missing required property '${attributeObj.baseName}'`);
      }
    }

    return instance;
  }
}

export function deserialize(
  data: any,
  typingInfo: ModelTypingInfo,
  type: string,
  format: string = "",
): any {
  if (data == undefined || type === "any") {
    return data;
  } else if (
    primitives.includes(type.toLowerCase()) &&
    typeof data == type.toLowerCase()
  ) {
    return data;
  } else if (type.startsWith(ARRAY_PREFIX)) {
    // Assert the passed data is Array type
    if (!Array.isArray(data)) {
      throw new TypeError(`mismatch types '${data}' and '${type}'`);
    }
    // Array<Type> => Type
    const subType: string = type.substring(
      ARRAY_PREFIX.length,
      type.length - 1,
    );
    const transformedData: any[] = [];
    for (const element of data) {
      transformedData.push(deserialize(element, typingInfo, subType, format));
    }
    return transformedData;
  } else if (type.startsWith(TUPLE_PREFIX)) {
    // [Type,...] => Type
    const subType: string = type
      .substring(TUPLE_PREFIX.length, type.length - 1)
      .split(", ")[0];
    const transformedData: any[] = [];
    for (const element of data) {
      transformedData.push(deserialize(element, typingInfo, subType, format));
    }
    return transformedData;
  } else if (type.startsWith(MAP_PREFIX)) {
    // { [key: string]: Type; } => Type
    const subType: string = type.substring(MAP_PREFIX.length, type.length - 3);
    const transformedData: { [key: string]: any } = {};
    for (const key in data) {
      transformedData[key] = deserialize(
        data[key],
        typingInfo,
        subType,
        format,
      );
    }
    return transformedData;
  } else if (type === "Date") {
    try {
      return dateFromRFC3339String(data);
    } catch {
      return new Date(data);
    }
  } else {
    if (typingInfo.enumsMap[type]) {
      if (typingInfo.enumsMap[type].includes(data)) {
        return data;
      }
      return new UnparsedObject(data);
    }
    if (typingInfo.oneOfMap[type]) {
      const oneOfs: any[] = [];
      for (const oneOf of typingInfo.oneOfMap[type]) {
        try {
          const d = deserialize(data, typingInfo, oneOf, format);
          if (!d?._unparsed) {
            oneOfs.push(d);
          }
        } catch (e) {
          logger.debug(`could not deserialize ${oneOf} (${e})`);
        }
      }
      if (oneOfs.length !== 1) {
        return new UnparsedObject(data);
      }
      return oneOfs[0];
    }

    if (!typingInfo.typeMap[type]) {
      // dont know the type
      throw new TypeError(`unknown type '${type}'`);
    }

    const instance = new typingInfo.typeMap[type]();
    const attributesMap = typingInfo.typeMap[type].getAttributeTypeMap();
    const attributesBaseNames = Object.keys(attributesMap).reduce(
      (o, key) => Object.assign(o, { [attributesMap[key].baseName]: "" }),
      {},
    );
    const extraAttributes = Object.keys(data).filter(
      (key) => !Object.prototype.hasOwnProperty.call(attributesBaseNames, key),
    );

    if (extraAttributes.length > 0) {
      if ("additionalProperties" in attributesMap) {
        if (!instance.additionalProperties) {
          instance.additionalProperties = {};
        }

        const additionalProperties: { [key: string]: any } = {};
        for (const key of extraAttributes) {
          additionalProperties[key] = data[key];
        }

        const attributeObj = attributesMap["additionalProperties"];
        instance.additionalProperties = deserialize(
          additionalProperties,
          typingInfo,
          attributeObj.type,
          attributeObj.format,
        );
      } else {
        throw new Error(
          `found extra attributes '${extraAttributes}' in ${type}`,
        );
      }
    }

    for (const attributeName in attributesMap) {
      const attributeObj = attributesMap[attributeName];
      if (attributeName === "additionalProperties") {
        continue;
      }

      instance[attributeName] = deserialize(
        data[attributeObj.baseName],
        typingInfo,
        attributeObj.type,
        attributeObj.format,
      );

      // check for required properties
      if (attributeObj?.required && instance[attributeName] === undefined) {
        throw new Error(`missing required property '${attributeName}'`);
      }

      if (
        instance[attributeName] instanceof UnparsedObject ||
        instance[attributeName]?._unparsed
      ) {
        instance._unparsed = true;
      }

      if (Array.isArray(instance[attributeName])) {
        for (const d of instance[attributeName]) {
          if (d instanceof UnparsedObject || d?._unparsed) {
            instance._unparsed = true;
            break;
          }
        }
      }
    }

    return instance;
  }
}
