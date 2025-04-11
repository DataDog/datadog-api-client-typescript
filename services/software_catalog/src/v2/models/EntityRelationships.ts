import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityToIncidents } from "./EntityToIncidents";
import { EntityToOncalls } from "./EntityToOncalls";
import { EntityToRawSchema } from "./EntityToRawSchema";
import { EntityToRelatedEntities } from "./EntityToRelatedEntities";
import { EntityToSchema } from "./EntityToSchema";

/**
 * Entity relationships.
 */
export class EntityRelationships {
  /**
   * Entity to incidents relationship.
   */
  "incidents"?: EntityToIncidents;
  /**
   * Entity to oncalls relationship.
   */
  "oncall"?: EntityToOncalls;
  /**
   * Entity to raw schema relationship.
   */
  "rawSchema"?: EntityToRawSchema;
  /**
   * Entity to related entities relationship.
   */
  "relatedEntities"?: EntityToRelatedEntities;
  /**
   * Entity to detail schema relationship.
   */
  "schema"?: EntityToSchema;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    incidents: {
      baseName: "incidents",
      type: "EntityToIncidents",
    },
    oncall: {
      baseName: "oncall",
      type: "EntityToOncalls",
    },
    rawSchema: {
      baseName: "rawSchema",
      type: "EntityToRawSchema",
    },
    relatedEntities: {
      baseName: "relatedEntities",
      type: "EntityToRelatedEntities",
    },
    schema: {
      baseName: "schema",
      type: "EntityToSchema",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityRelationships.attributeTypeMap;
  }

  public constructor() {}
}
