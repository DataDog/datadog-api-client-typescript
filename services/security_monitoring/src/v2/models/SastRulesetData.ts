import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType";
import { SastRulesetDataAttributes } from "./SastRulesetDataAttributes";

/**
 * The primary data object representing a SAST ruleset.
 */
export class SastRulesetData {
  /**
   * The attributes of a SAST ruleset, including its name, description, and rules.
   */
  "attributes": SastRulesetDataAttributes;
  /**
   * The unique identifier of the ruleset resource.
   */
  "id": string;
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
    attributes: {
      baseName: "attributes",
      type: "SastRulesetDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return SastRulesetData.attributeTypeMap;
  }

  public constructor() {}
}
