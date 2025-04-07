import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleActionAction } from "./ApplicationSecurityWafCustomRuleActionAction";
import { ApplicationSecurityWafCustomRuleActionParameters } from "./ApplicationSecurityWafCustomRuleActionParameters";

/**
 * The definition of `ApplicationSecurityWafCustomRuleAction` object.
 */
export class ApplicationSecurityWafCustomRuleAction {
  /**
   * Override the default action to take when the WAF custom rule would block.
   */
  "action"?: ApplicationSecurityWafCustomRuleActionAction;
  /**
   * The definition of `ApplicationSecurityWafCustomRuleActionParameters` object.
   */
  "parameters"?: ApplicationSecurityWafCustomRuleActionParameters;
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
    action: {
      baseName: "action",
      type: "ApplicationSecurityWafCustomRuleActionAction",
    },
    parameters: {
      baseName: "parameters",
      type: "ApplicationSecurityWafCustomRuleActionParameters",
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
    return ApplicationSecurityWafCustomRuleAction.attributeTypeMap;
  }

  public constructor() {}
}
