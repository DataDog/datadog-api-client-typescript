import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType";

/**
 * The resource identifier and type for a ruleset.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItemsData {
  /**
   * The unique identifier of the ruleset resource.
   */
  "id"?: string;
  /**
   * Rulesets resource type.
   */
  "type": GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType;
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
      type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItemsData.attributeTypeMap;
  }

  public constructor() {}
}
