import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseDataRelationshipsIncidentsDataItemsType } from "./EntityResponseDataRelationshipsIncidentsDataItemsType";

/**
 * Incident relationship data item containing the incident resource identifier and type.
 */
export class EntityResponseDataRelationshipsIncidentsDataItems {
  /**
   * Incident resource unique identifier.
   */
  "id": string;
  /**
   * Incident resource type.
   */
  "type": EntityResponseDataRelationshipsIncidentsDataItemsType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EntityResponseDataRelationshipsIncidentsDataItemsType",
      required: true,
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
    return EntityResponseDataRelationshipsIncidentsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
