import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseDataRelationshipsIncidents } from "./EntityResponseDataRelationshipsIncidents";
import { EntityResponseDataRelationshipsOncalls } from "./EntityResponseDataRelationshipsOncalls";
import { EntityResponseDataRelationshipsRawSchema } from "./EntityResponseDataRelationshipsRawSchema";
import { EntityResponseDataRelationshipsRelatedEntities } from "./EntityResponseDataRelationshipsRelatedEntities";
import { EntityResponseDataRelationshipsSchema } from "./EntityResponseDataRelationshipsSchema";

export class EntityResponseDataRelationships {
  "incidents"?: EntityResponseDataRelationshipsIncidents;
  "oncalls"?: EntityResponseDataRelationshipsOncalls;
  "rawSchema"?: EntityResponseDataRelationshipsRawSchema;
  "relatedEntities"?: EntityResponseDataRelationshipsRelatedEntities;
  "schema"?: EntityResponseDataRelationshipsSchema;
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
      type: "EntityResponseDataRelationshipsIncidents",
    },
    oncalls: {
      baseName: "oncalls",
      type: "EntityResponseDataRelationshipsOncalls",
    },
    rawSchema: {
      baseName: "rawSchema",
      type: "EntityResponseDataRelationshipsRawSchema",
    },
    relatedEntities: {
      baseName: "relatedEntities",
      type: "EntityResponseDataRelationshipsRelatedEntities",
    },
    schema: {
      baseName: "schema",
      type: "EntityResponseDataRelationshipsSchema",
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
    return EntityResponseDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
