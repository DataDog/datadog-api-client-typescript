import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsDataType } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsDataType";

/**
 * The definition of `GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData` object.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData {
  /**
   * The `data` `id`.
   */
  "id"?: string;
  /**
   * Rules resource type.
   */
  "type": GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsDataType;
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
    },
    type: {
      baseName: "type",
      type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsDataType",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData.attributeTypeMap;
  }

  public constructor() {}
}
