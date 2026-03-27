import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OutcomesResponseIncludedRuleAttributes } from "./OutcomesResponseIncludedRuleAttributes";
import { RuleType } from "./RuleType";

/**
 * Attributes of the included rule.
 */
export class OutcomesResponseIncludedItem {
  /**
   * Details of a rule.
   */
  "attributes"?: OutcomesResponseIncludedRuleAttributes;
  /**
   * The unique ID for a scorecard rule.
   */
  "id"?: string;
  /**
   * The JSON:API type for scorecard rules.
   */
  "type"?: RuleType;
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
      type: "OutcomesResponseIncludedRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RuleType",
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
    return OutcomesResponseIncludedItem.attributeTypeMap;
  }

  public constructor() {}
}
