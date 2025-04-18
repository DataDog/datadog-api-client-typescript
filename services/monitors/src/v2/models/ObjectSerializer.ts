import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  logger,
} from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { MonitorConfigPolicyAttributeCreateRequest } from "./MonitorConfigPolicyAttributeCreateRequest";
import { MonitorConfigPolicyAttributeEditRequest } from "./MonitorConfigPolicyAttributeEditRequest";
import { MonitorConfigPolicyAttributeResponse } from "./MonitorConfigPolicyAttributeResponse";
import { MonitorConfigPolicyCreateData } from "./MonitorConfigPolicyCreateData";
import { MonitorConfigPolicyCreateRequest } from "./MonitorConfigPolicyCreateRequest";
import { MonitorConfigPolicyEditData } from "./MonitorConfigPolicyEditData";
import { MonitorConfigPolicyEditRequest } from "./MonitorConfigPolicyEditRequest";
import { MonitorConfigPolicyListResponse } from "./MonitorConfigPolicyListResponse";
import { MonitorConfigPolicyResponse } from "./MonitorConfigPolicyResponse";
import { MonitorConfigPolicyResponseData } from "./MonitorConfigPolicyResponseData";
import { MonitorConfigPolicyTagPolicy } from "./MonitorConfigPolicyTagPolicy";
import { MonitorConfigPolicyTagPolicyCreateRequest } from "./MonitorConfigPolicyTagPolicyCreateRequest";
import { MonitorNotificationRuleAttributes } from "./MonitorNotificationRuleAttributes";
import { MonitorNotificationRuleCreateRequest } from "./MonitorNotificationRuleCreateRequest";
import { MonitorNotificationRuleCreateRequestData } from "./MonitorNotificationRuleCreateRequestData";
import { MonitorNotificationRuleData } from "./MonitorNotificationRuleData";
import { MonitorNotificationRuleFilterTags } from "./MonitorNotificationRuleFilterTags";
import { MonitorNotificationRuleListResponse } from "./MonitorNotificationRuleListResponse";
import { MonitorNotificationRuleRelationships } from "./MonitorNotificationRuleRelationships";
import { MonitorNotificationRuleRelationshipsCreatedBy } from "./MonitorNotificationRuleRelationshipsCreatedBy";
import { MonitorNotificationRuleRelationshipsCreatedByData } from "./MonitorNotificationRuleRelationshipsCreatedByData";
import { MonitorNotificationRuleResponse } from "./MonitorNotificationRuleResponse";
import { MonitorNotificationRuleResponseAttributes } from "./MonitorNotificationRuleResponseAttributes";
import { MonitorNotificationRuleUpdateRequest } from "./MonitorNotificationRuleUpdateRequest";
import { MonitorNotificationRuleUpdateRequestData } from "./MonitorNotificationRuleUpdateRequestData";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";

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
  MonitorConfigPolicyResourceType: ["monitor-config-policy"],
  MonitorConfigPolicyType: ["tag"],
  MonitorNotificationRuleResourceType: ["monitor-notification-rule"],
  OrganizationsType: ["orgs"],
  RolesType: ["roles"],
  UsersType: ["users"],
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  MonitorConfigPolicyAttributeCreateRequest:
    MonitorConfigPolicyAttributeCreateRequest,
  MonitorConfigPolicyAttributeEditRequest:
    MonitorConfigPolicyAttributeEditRequest,
  MonitorConfigPolicyAttributeResponse: MonitorConfigPolicyAttributeResponse,
  MonitorConfigPolicyCreateData: MonitorConfigPolicyCreateData,
  MonitorConfigPolicyCreateRequest: MonitorConfigPolicyCreateRequest,
  MonitorConfigPolicyEditData: MonitorConfigPolicyEditData,
  MonitorConfigPolicyEditRequest: MonitorConfigPolicyEditRequest,
  MonitorConfigPolicyListResponse: MonitorConfigPolicyListResponse,
  MonitorConfigPolicyResponse: MonitorConfigPolicyResponse,
  MonitorConfigPolicyResponseData: MonitorConfigPolicyResponseData,
  MonitorConfigPolicyTagPolicy: MonitorConfigPolicyTagPolicy,
  MonitorConfigPolicyTagPolicyCreateRequest:
    MonitorConfigPolicyTagPolicyCreateRequest,
  MonitorNotificationRuleAttributes: MonitorNotificationRuleAttributes,
  MonitorNotificationRuleCreateRequest: MonitorNotificationRuleCreateRequest,
  MonitorNotificationRuleCreateRequestData:
    MonitorNotificationRuleCreateRequestData,
  MonitorNotificationRuleData: MonitorNotificationRuleData,
  MonitorNotificationRuleFilterTags: MonitorNotificationRuleFilterTags,
  MonitorNotificationRuleListResponse: MonitorNotificationRuleListResponse,
  MonitorNotificationRuleRelationships: MonitorNotificationRuleRelationships,
  MonitorNotificationRuleRelationshipsCreatedBy:
    MonitorNotificationRuleRelationshipsCreatedBy,
  MonitorNotificationRuleRelationshipsCreatedByData:
    MonitorNotificationRuleRelationshipsCreatedByData,
  MonitorNotificationRuleResponse: MonitorNotificationRuleResponse,
  MonitorNotificationRuleResponseAttributes:
    MonitorNotificationRuleResponseAttributes,
  MonitorNotificationRuleUpdateRequest: MonitorNotificationRuleUpdateRequest,
  MonitorNotificationRuleUpdateRequestData:
    MonitorNotificationRuleUpdateRequestData,
  RelationshipToOrganization: RelationshipToOrganization,
  RelationshipToOrganizationData: RelationshipToOrganizationData,
  RelationshipToOrganizations: RelationshipToOrganizations,
  RelationshipToRoleData: RelationshipToRoleData,
  RelationshipToRoles: RelationshipToRoles,
  RelationshipToUserData: RelationshipToUserData,
  RelationshipToUsers: RelationshipToUsers,
  User: User,
  UserAttributes: UserAttributes,
  UserResponseRelationships: UserResponseRelationships,
};

const oneOfMap: { [index: string]: string[] } = {
  MonitorConfigPolicyPolicy: ["MonitorConfigPolicyTagPolicy"],
  MonitorConfigPolicyPolicyCreateRequest: [
    "MonitorConfigPolicyTagPolicyCreateRequest",
  ],
  MonitorNotificationRuleFilter: ["MonitorNotificationRuleFilterTags"],
  MonitorNotificationRuleResponseIncludedItem: ["User"],
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
          const additionalProperties = ObjectSerializer.serialize(
            data.additionalProperties,
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

          const additionalProperties: { [key: string]: any } = {};
          for (const key of extraAttributes) {
            additionalProperties[key] = data[key];
          }

          const attributeObj = attributesMap["additionalProperties"];
          instance.additionalProperties = ObjectSerializer.deserialize(
            additionalProperties,
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
