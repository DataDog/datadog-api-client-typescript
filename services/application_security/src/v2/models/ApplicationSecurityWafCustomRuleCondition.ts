import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleConditionOperator } from "./ApplicationSecurityWafCustomRuleConditionOperator";
import { ApplicationSecurityWafCustomRuleConditionParameters } from "./ApplicationSecurityWafCustomRuleConditionParameters";

/**
 * One condition of the WAF Custom Rule.
 */
export class ApplicationSecurityWafCustomRuleCondition {
  /**
   * Operator to use for the WAF Condition.
   */
  "operator": ApplicationSecurityWafCustomRuleConditionOperator;
  /**
   * The scope of the WAF custom rule.
   */
  "parameters": ApplicationSecurityWafCustomRuleConditionParameters;
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
    operator: {
      baseName: "operator",
      type: "ApplicationSecurityWafCustomRuleConditionOperator",
      required: true,
    },
    parameters: {
      baseName: "parameters",
      type: "ApplicationSecurityWafCustomRuleConditionParameters",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationSecurityWafCustomRuleCondition.attributeTypeMap;
  }

  public constructor() {}
}
