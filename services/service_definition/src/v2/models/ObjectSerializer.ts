import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  logger,
} from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ServiceDefinitionCreateResponse } from "./ServiceDefinitionCreateResponse";
import { ServiceDefinitionData } from "./ServiceDefinitionData";
import { ServiceDefinitionDataAttributes } from "./ServiceDefinitionDataAttributes";
import { ServiceDefinitionGetResponse } from "./ServiceDefinitionGetResponse";
import { ServiceDefinitionMeta } from "./ServiceDefinitionMeta";
import { ServiceDefinitionMetaWarnings } from "./ServiceDefinitionMetaWarnings";
import { ServiceDefinitionV1 } from "./ServiceDefinitionV1";
import { ServiceDefinitionV1Contact } from "./ServiceDefinitionV1Contact";
import { ServiceDefinitionV1Info } from "./ServiceDefinitionV1Info";
import { ServiceDefinitionV1Integrations } from "./ServiceDefinitionV1Integrations";
import { ServiceDefinitionV1Org } from "./ServiceDefinitionV1Org";
import { ServiceDefinitionV1Resource } from "./ServiceDefinitionV1Resource";
import { ServiceDefinitionV2 } from "./ServiceDefinitionV2";
import { ServiceDefinitionV2Doc } from "./ServiceDefinitionV2Doc";
import { ServiceDefinitionV2Dot1 } from "./ServiceDefinitionV2Dot1";
import { ServiceDefinitionV2Dot1Email } from "./ServiceDefinitionV2Dot1Email";
import { ServiceDefinitionV2Dot1Integrations } from "./ServiceDefinitionV2Dot1Integrations";
import { ServiceDefinitionV2Dot1Link } from "./ServiceDefinitionV2Dot1Link";
import { ServiceDefinitionV2Dot1MSTeams } from "./ServiceDefinitionV2Dot1MSTeams";
import { ServiceDefinitionV2Dot1Opsgenie } from "./ServiceDefinitionV2Dot1Opsgenie";
import { ServiceDefinitionV2Dot1Pagerduty } from "./ServiceDefinitionV2Dot1Pagerduty";
import { ServiceDefinitionV2Dot1Slack } from "./ServiceDefinitionV2Dot1Slack";
import { ServiceDefinitionV2Dot2 } from "./ServiceDefinitionV2Dot2";
import { ServiceDefinitionV2Dot2Contact } from "./ServiceDefinitionV2Dot2Contact";
import { ServiceDefinitionV2Dot2Integrations } from "./ServiceDefinitionV2Dot2Integrations";
import { ServiceDefinitionV2Dot2Link } from "./ServiceDefinitionV2Dot2Link";
import { ServiceDefinitionV2Dot2Opsgenie } from "./ServiceDefinitionV2Dot2Opsgenie";
import { ServiceDefinitionV2Dot2Pagerduty } from "./ServiceDefinitionV2Dot2Pagerduty";
import { ServiceDefinitionV2Email } from "./ServiceDefinitionV2Email";
import { ServiceDefinitionV2Integrations } from "./ServiceDefinitionV2Integrations";
import { ServiceDefinitionV2Link } from "./ServiceDefinitionV2Link";
import { ServiceDefinitionV2MSTeams } from "./ServiceDefinitionV2MSTeams";
import { ServiceDefinitionV2Opsgenie } from "./ServiceDefinitionV2Opsgenie";
import { ServiceDefinitionV2Repo } from "./ServiceDefinitionV2Repo";
import { ServiceDefinitionV2Slack } from "./ServiceDefinitionV2Slack";
import { ServiceDefinitionsListResponse } from "./ServiceDefinitionsListResponse";

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

const enumsMap: { [key: string]: any[] } = {
  ServiceDefinitionSchemaVersions: ["v1", "v2", "v2.1", "v2.2"],
  ServiceDefinitionV1ResourceType: [
    "doc",
    "wiki",
    "runbook",
    "url",
    "repo",
    "dashboard",
    "oncall",
    "code",
    "link",
  ],
  ServiceDefinitionV1Version: ["v1"],
  ServiceDefinitionV2Dot1EmailType: ["email"],
  ServiceDefinitionV2Dot1LinkType: [
    "doc",
    "repo",
    "runbook",
    "dashboard",
    "other",
  ],
  ServiceDefinitionV2Dot1MSTeamsType: ["microsoft-teams"],
  ServiceDefinitionV2Dot1OpsgenieRegion: ["US", "EU"],
  ServiceDefinitionV2Dot1SlackType: ["slack"],
  ServiceDefinitionV2Dot1Version: ["v2.1"],
  ServiceDefinitionV2Dot2OpsgenieRegion: ["US", "EU"],
  ServiceDefinitionV2Dot2Version: ["v2.2"],
  ServiceDefinitionV2EmailType: ["email"],
  ServiceDefinitionV2LinkType: [
    "doc",
    "wiki",
    "runbook",
    "url",
    "repo",
    "dashboard",
    "oncall",
    "code",
    "link",
  ],
  ServiceDefinitionV2MSTeamsType: ["microsoft-teams"],
  ServiceDefinitionV2OpsgenieRegion: ["US", "EU"],
  ServiceDefinitionV2SlackType: ["slack"],
  ServiceDefinitionV2Version: ["v2"],
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  ServiceDefinitionCreateResponse: ServiceDefinitionCreateResponse,
  ServiceDefinitionData: ServiceDefinitionData,
  ServiceDefinitionDataAttributes: ServiceDefinitionDataAttributes,
  ServiceDefinitionGetResponse: ServiceDefinitionGetResponse,
  ServiceDefinitionMeta: ServiceDefinitionMeta,
  ServiceDefinitionMetaWarnings: ServiceDefinitionMetaWarnings,
  ServiceDefinitionV1: ServiceDefinitionV1,
  ServiceDefinitionV1Contact: ServiceDefinitionV1Contact,
  ServiceDefinitionV1Info: ServiceDefinitionV1Info,
  ServiceDefinitionV1Integrations: ServiceDefinitionV1Integrations,
  ServiceDefinitionV1Org: ServiceDefinitionV1Org,
  ServiceDefinitionV1Resource: ServiceDefinitionV1Resource,
  ServiceDefinitionV2: ServiceDefinitionV2,
  ServiceDefinitionV2Doc: ServiceDefinitionV2Doc,
  ServiceDefinitionV2Dot1: ServiceDefinitionV2Dot1,
  ServiceDefinitionV2Dot1Email: ServiceDefinitionV2Dot1Email,
  ServiceDefinitionV2Dot1Integrations: ServiceDefinitionV2Dot1Integrations,
  ServiceDefinitionV2Dot1Link: ServiceDefinitionV2Dot1Link,
  ServiceDefinitionV2Dot1MSTeams: ServiceDefinitionV2Dot1MSTeams,
  ServiceDefinitionV2Dot1Opsgenie: ServiceDefinitionV2Dot1Opsgenie,
  ServiceDefinitionV2Dot1Pagerduty: ServiceDefinitionV2Dot1Pagerduty,
  ServiceDefinitionV2Dot1Slack: ServiceDefinitionV2Dot1Slack,
  ServiceDefinitionV2Dot2: ServiceDefinitionV2Dot2,
  ServiceDefinitionV2Dot2Contact: ServiceDefinitionV2Dot2Contact,
  ServiceDefinitionV2Dot2Integrations: ServiceDefinitionV2Dot2Integrations,
  ServiceDefinitionV2Dot2Link: ServiceDefinitionV2Dot2Link,
  ServiceDefinitionV2Dot2Opsgenie: ServiceDefinitionV2Dot2Opsgenie,
  ServiceDefinitionV2Dot2Pagerduty: ServiceDefinitionV2Dot2Pagerduty,
  ServiceDefinitionV2Email: ServiceDefinitionV2Email,
  ServiceDefinitionV2Integrations: ServiceDefinitionV2Integrations,
  ServiceDefinitionV2Link: ServiceDefinitionV2Link,
  ServiceDefinitionV2MSTeams: ServiceDefinitionV2MSTeams,
  ServiceDefinitionV2Opsgenie: ServiceDefinitionV2Opsgenie,
  ServiceDefinitionV2Repo: ServiceDefinitionV2Repo,
  ServiceDefinitionV2Slack: ServiceDefinitionV2Slack,
  ServiceDefinitionsListResponse: ServiceDefinitionsListResponse,
};

const oneOfMap: { [index: string]: string[] } = {
  ServiceDefinitionSchema: [
    "ServiceDefinitionV1",
    "ServiceDefinitionV2",
    "ServiceDefinitionV2Dot1",
    "ServiceDefinitionV2Dot2",
  ],
  ServiceDefinitionV2Contact: [
    "ServiceDefinitionV2Email",
    "ServiceDefinitionV2Slack",
    "ServiceDefinitionV2MSTeams",
  ],
  ServiceDefinitionV2Dot1Contact: [
    "ServiceDefinitionV2Dot1Email",
    "ServiceDefinitionV2Dot1Slack",
    "ServiceDefinitionV2Dot1MSTeams",
  ],
  ServiceDefinitionsCreateRequest: [
    "ServiceDefinitionV2Dot2",
    "ServiceDefinitionV2Dot1",
    "ServiceDefinitionV2",
    "string",
  ],
};

export class ObjectSerializer {
  public static serialize(data: any, type: string, format: string): any {
    if (data == undefined || type == "any") {
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
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // We only support homegeneus tuples
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.serialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      if ("string" == typeof data) {
        return data;
      }
      if (format == "date" || format == "date-time") {
        return dateToRFC3339String(data);
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        throw new TypeError(`unknown enum value '${data}'`);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
          } catch (e) {
            logger.debug(`could not serialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length > 1) {
          throw new TypeError(
            `${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        if (oneOfs.length == 0) {
          throw new TypeError(
            `${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      // get the map for the correct type.
      const attributesMap = typeMap[type].getAttributeTypeMap();
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
          instance[attributeObj.baseName] = ObjectSerializer.serialize(
            data[attributeName],
            attributeObj.type,
            attributeObj.format,
          );
        }
      }

      if (data.additionalProperties) {
        const additionalPropertiesMap = attributesMap["additionalProperties"];
        if (additionalPropertiesMap) {
          for (const key in data.additionalProperties) {
            instance[key] = ObjectSerializer.serialize(
              data.additionalProperties[key],
              additionalPropertiesMap.type,
              additionalPropertiesMap.format,
            );
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
          throw new Error(
            `missing required property '${attributeObj.baseName}'`,
          );
        }
      }

      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string = ""): any {
    if (data == undefined || type == "any") {
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
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // [Type,...] => Type
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.deserialize(
          data[key],
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
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        return new UnparsedObject(data);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            const d = ObjectSerializer.deserialize(data, oneOf, format);
            if (!d?._unparsed) {
              oneOfs.push(d);
            }
          } catch (e) {
            logger.debug(`could not deserialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length != 1) {
          return new UnparsedObject(data);
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      const instance = new typeMap[type]();
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const attributesBaseNames = Object.keys(attributesMap).reduce(
        (o, key) => Object.assign(o, { [attributesMap[key].baseName]: "" }),
        {},
      );
      const extraAttributes = Object.keys(data).filter(
        (key) =>
          !Object.prototype.hasOwnProperty.call(attributesBaseNames, key),
      );

      if (extraAttributes.length > 0) {
        if ("additionalProperties" in attributesMap) {
          if (!instance.additionalProperties) {
            instance.additionalProperties = {};
          }

          const attributeObj = attributesMap["additionalProperties"];
          for (const key in extraAttributes) {
            instance.additionalProperties[extraAttributes[key]] =
              ObjectSerializer.deserialize(
                data[extraAttributes[key]],
                attributeObj.type,
                attributeObj.format,
              );
          }
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

        instance[attributeName] = ObjectSerializer.deserialize(
          data[attributeObj.baseName],
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

  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(
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
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return "application/json";
    }

    const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank: number = -Infinity;
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
  public static stringify(data: any, mediaType: string): string {
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
  public static parse(rawData: string, mediaType: string | undefined): any {
    try {
      return JSON.parse(rawData);
    } catch (error) {
      logger.debug(`could not parse ${mediaType}: ${error}`);
      return rawData;
    }
  }
}
