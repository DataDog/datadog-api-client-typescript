import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleConditionInput } from "./ApplicationSecurityWafCustomRuleConditionInput";
import { ApplicationSecurityWafCustomRuleConditionOptions } from "./ApplicationSecurityWafCustomRuleConditionOptions";

/**
 * The scope of the WAF custom rule.
 */
export class ApplicationSecurityWafCustomRuleConditionParameters {
  /**
   * Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter.
   */
  "data"?: string;
  /**
   * List of inputs on which at least one should match with the given operator.
   */
  "inputs": Array<ApplicationSecurityWafCustomRuleConditionInput>;
  /**
   * List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and
   * !exact_match operator.
   */
  "list"?: Array<string>;
  /**
   * Options for the operator of this condition.
   */
  "options"?: ApplicationSecurityWafCustomRuleConditionOptions;
  /**
   * Regex to use with the condition. Only used with match_regex and !match_regex operator.
   */
  "regex"?: string;
  /**
   * Store the captured value in the specified tag name. Only used with the capture_data operator.
   */
  "value"?: string;
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
    data: {
      baseName: "data",
      type: "string",
    },
    inputs: {
      baseName: "inputs",
      type: "Array<ApplicationSecurityWafCustomRuleConditionInput>",
      required: true,
    },
    list: {
      baseName: "list",
      type: "Array<string>",
    },
    options: {
      baseName: "options",
      type: "ApplicationSecurityWafCustomRuleConditionOptions",
    },
    regex: {
      baseName: "regex",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "string",
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
    return ApplicationSecurityWafCustomRuleConditionParameters.attributeTypeMap;
  }

  public constructor() {}
}
