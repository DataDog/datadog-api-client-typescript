import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  logger,
} from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { EntityAttributes } from "./EntityAttributes";
import { EntityData } from "./EntityData";
import { EntityMeta } from "./EntityMeta";
import { EntityRelationships } from "./EntityRelationships";
import { EntityResponseIncludedIncident } from "./EntityResponseIncludedIncident";
import { EntityResponseIncludedOncall } from "./EntityResponseIncludedOncall";
import { EntityResponseIncludedRawSchema } from "./EntityResponseIncludedRawSchema";
import { EntityResponseIncludedRawSchemaAttributes } from "./EntityResponseIncludedRawSchemaAttributes";
import { EntityResponseIncludedRelatedEntity } from "./EntityResponseIncludedRelatedEntity";
import { EntityResponseIncludedRelatedEntityAttributes } from "./EntityResponseIncludedRelatedEntityAttributes";
import { EntityResponseIncludedRelatedEntityMeta } from "./EntityResponseIncludedRelatedEntityMeta";
import { EntityResponseIncludedRelatedIncidentAttributes } from "./EntityResponseIncludedRelatedIncidentAttributes";
import { EntityResponseIncludedRelatedOncallAttributes } from "./EntityResponseIncludedRelatedOncallAttributes";
import { EntityResponseIncludedRelatedOncallEscalationItem } from "./EntityResponseIncludedRelatedOncallEscalationItem";
import { EntityResponseIncludedSchema } from "./EntityResponseIncludedSchema";
import { EntityResponseIncludedSchemaAttributes } from "./EntityResponseIncludedSchemaAttributes";
import { EntityResponseMeta } from "./EntityResponseMeta";
import { EntityToIncidents } from "./EntityToIncidents";
import { EntityToOncalls } from "./EntityToOncalls";
import { EntityToRawSchema } from "./EntityToRawSchema";
import { EntityToRelatedEntities } from "./EntityToRelatedEntities";
import { EntityToSchema } from "./EntityToSchema";
import { EntityV3API } from "./EntityV3API";
import { EntityV3APIDatadog } from "./EntityV3APIDatadog";
import { EntityV3APISpec } from "./EntityV3APISpec";
import { EntityV3APISpecInterfaceDefinition } from "./EntityV3APISpecInterfaceDefinition";
import { EntityV3APISpecInterfaceFileRef } from "./EntityV3APISpecInterfaceFileRef";
import { EntityV3DatadogCodeLocationItem } from "./EntityV3DatadogCodeLocationItem";
import { EntityV3DatadogEventItem } from "./EntityV3DatadogEventItem";
import { EntityV3DatadogIntegrationOpsgenie } from "./EntityV3DatadogIntegrationOpsgenie";
import { EntityV3DatadogIntegrationPagerduty } from "./EntityV3DatadogIntegrationPagerduty";
import { EntityV3DatadogLogItem } from "./EntityV3DatadogLogItem";
import { EntityV3DatadogPerformance } from "./EntityV3DatadogPerformance";
import { EntityV3DatadogPipelines } from "./EntityV3DatadogPipelines";
import { EntityV3Datastore } from "./EntityV3Datastore";
import { EntityV3DatastoreDatadog } from "./EntityV3DatastoreDatadog";
import { EntityV3DatastoreSpec } from "./EntityV3DatastoreSpec";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";
import { EntityV3MetadataAdditionalOwnersItems } from "./EntityV3MetadataAdditionalOwnersItems";
import { EntityV3MetadataContactsItems } from "./EntityV3MetadataContactsItems";
import { EntityV3MetadataLinksItems } from "./EntityV3MetadataLinksItems";
import { EntityV3Queue } from "./EntityV3Queue";
import { EntityV3QueueDatadog } from "./EntityV3QueueDatadog";
import { EntityV3QueueSpec } from "./EntityV3QueueSpec";
import { EntityV3Service } from "./EntityV3Service";
import { EntityV3ServiceDatadog } from "./EntityV3ServiceDatadog";
import { EntityV3ServiceSpec } from "./EntityV3ServiceSpec";
import { EntityV3System } from "./EntityV3System";
import { EntityV3SystemDatadog } from "./EntityV3SystemDatadog";
import { EntityV3SystemSpec } from "./EntityV3SystemSpec";
import { ListEntityCatalogResponse } from "./ListEntityCatalogResponse";
import { ListEntityCatalogResponseLinks } from "./ListEntityCatalogResponseLinks";
import { RelationshipItem } from "./RelationshipItem";
import { UpsertCatalogEntityResponse } from "./UpsertCatalogEntityResponse";

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
  EntityResponseIncludedIncidentType: ["incident"],
  EntityResponseIncludedOncallType: ["oncall"],
  EntityResponseIncludedRawSchemaType: ["rawSchema"],
  EntityResponseIncludedRelatedEntityType: ["relatedEntity"],
  EntityResponseIncludedSchemaType: ["schema"],
  EntityV3APIKind: ["api"],
  EntityV3APIVersion: ["v3"],
  EntityV3DatastoreKind: ["datastore"],
  EntityV3QueueKind: ["queue"],
  EntityV3ServiceKind: ["service"],
  EntityV3SystemKind: ["system"],
  IncludeType: ["schema", "raw_schema", "oncall", "incident", "relation"],
  RelationType: ["RelationTypeOwns", "RelationTypeOwnedBy", "RelationTypeDependsOn", "RelationTypeDependencyOf", "RelationTypePartsOf", "RelationTypeHasPart", "RelationTypeOtherOwns", "RelationTypeOtherOwnedBy", "RelationTypeImplementedBy", "RelationTypeImplements"],
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  EntityAttributes: EntityAttributes,
  EntityData: EntityData,
  EntityMeta: EntityMeta,
  EntityRelationships: EntityRelationships,
  EntityResponseIncludedIncident: EntityResponseIncludedIncident,
  EntityResponseIncludedOncall: EntityResponseIncludedOncall,
  EntityResponseIncludedRawSchema: EntityResponseIncludedRawSchema,
  EntityResponseIncludedRawSchemaAttributes: EntityResponseIncludedRawSchemaAttributes,
  EntityResponseIncludedRelatedEntity: EntityResponseIncludedRelatedEntity,
  EntityResponseIncludedRelatedEntityAttributes: EntityResponseIncludedRelatedEntityAttributes,
  EntityResponseIncludedRelatedEntityMeta: EntityResponseIncludedRelatedEntityMeta,
  EntityResponseIncludedRelatedIncidentAttributes: EntityResponseIncludedRelatedIncidentAttributes,
  EntityResponseIncludedRelatedOncallAttributes: EntityResponseIncludedRelatedOncallAttributes,
  EntityResponseIncludedRelatedOncallEscalationItem: EntityResponseIncludedRelatedOncallEscalationItem,
  EntityResponseIncludedSchema: EntityResponseIncludedSchema,
  EntityResponseIncludedSchemaAttributes: EntityResponseIncludedSchemaAttributes,
  EntityResponseMeta: EntityResponseMeta,
  EntityToIncidents: EntityToIncidents,
  EntityToOncalls: EntityToOncalls,
  EntityToRawSchema: EntityToRawSchema,
  EntityToRelatedEntities: EntityToRelatedEntities,
  EntityToSchema: EntityToSchema,
  EntityV3API: EntityV3API,
  EntityV3APIDatadog: EntityV3APIDatadog,
  EntityV3APISpec: EntityV3APISpec,
  EntityV3APISpecInterfaceDefinition: EntityV3APISpecInterfaceDefinition,
  EntityV3APISpecInterfaceFileRef: EntityV3APISpecInterfaceFileRef,
  EntityV3DatadogCodeLocationItem: EntityV3DatadogCodeLocationItem,
  EntityV3DatadogEventItem: EntityV3DatadogEventItem,
  EntityV3DatadogIntegrationOpsgenie: EntityV3DatadogIntegrationOpsgenie,
  EntityV3DatadogIntegrationPagerduty: EntityV3DatadogIntegrationPagerduty,
  EntityV3DatadogLogItem: EntityV3DatadogLogItem,
  EntityV3DatadogPerformance: EntityV3DatadogPerformance,
  EntityV3DatadogPipelines: EntityV3DatadogPipelines,
  EntityV3Datastore: EntityV3Datastore,
  EntityV3DatastoreDatadog: EntityV3DatastoreDatadog,
  EntityV3DatastoreSpec: EntityV3DatastoreSpec,
  EntityV3Integrations: EntityV3Integrations,
  EntityV3Metadata: EntityV3Metadata,
  EntityV3MetadataAdditionalOwnersItems: EntityV3MetadataAdditionalOwnersItems,
  EntityV3MetadataContactsItems: EntityV3MetadataContactsItems,
  EntityV3MetadataLinksItems: EntityV3MetadataLinksItems,
  EntityV3Queue: EntityV3Queue,
  EntityV3QueueDatadog: EntityV3QueueDatadog,
  EntityV3QueueSpec: EntityV3QueueSpec,
  EntityV3Service: EntityV3Service,
  EntityV3ServiceDatadog: EntityV3ServiceDatadog,
  EntityV3ServiceSpec: EntityV3ServiceSpec,
  EntityV3System: EntityV3System,
  EntityV3SystemDatadog: EntityV3SystemDatadog,
  EntityV3SystemSpec: EntityV3SystemSpec,
  ListEntityCatalogResponse: ListEntityCatalogResponse,
  ListEntityCatalogResponseLinks: ListEntityCatalogResponseLinks,
  RelationshipItem: RelationshipItem,
  UpsertCatalogEntityResponse: UpsertCatalogEntityResponse,
};

const oneOfMap: { [index: string]: string[] } = {
  EntityV3: [
    "EntityV3Service",
    "EntityV3Datastore",
    "EntityV3Queue",
    "EntityV3System",
    "EntityV3API",
  ],
  EntityV3APISpecInterface: [
    "EntityV3APISpecInterfaceFileRef",
    "EntityV3APISpecInterfaceDefinition",
  ],
  ListEntityCatalogResponseIncludedItem: [
    "EntityResponseIncludedSchema",
    "EntityResponseIncludedRawSchema",
    "EntityResponseIncludedRelatedEntity",
    "EntityResponseIncludedOncall",
    "EntityResponseIncludedIncident",
  ],
  UpsertCatalogEntityRequest: ["EntityV3", "string"],
  UpsertCatalogEntityResponseIncludedItem: ["EntityResponseIncludedSchema"],
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
