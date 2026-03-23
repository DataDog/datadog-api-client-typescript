import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseDataRelationshipsOncallsDataItemsType } from "./EntityResponseDataRelationshipsOncallsDataItemsType";

/**
 * Oncall relationship data item containing the oncall resource identifier and type.
 */
export class EntityResponseDataRelationshipsOncallsDataItems {
  /**
   * Oncall resource unique identifier.
   */
  "id": string;
  /**
   * Oncall resource type.
   */
  "type": EntityResponseDataRelationshipsOncallsDataItemsType;
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
      type: "EntityResponseDataRelationshipsOncallsDataItemsType",
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
    return EntityResponseDataRelationshipsOncallsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
