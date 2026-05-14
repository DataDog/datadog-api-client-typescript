import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Counts of findings for the rule, grouped by their evaluation status.
 */
export class RuleBasedViewRuleStats {
  /**
   * Number of findings that failed evaluation.
   */
  "fail": number;
  /**
   * Number of findings that have been muted.
   */
  "muted": number;
  /**
   * Number of findings that passed evaluation.
   */
  "pass": number;
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
    fail: {
      baseName: "fail",
      type: "number",
      required: true,
      format: "int64",
    },
    muted: {
      baseName: "muted",
      type: "number",
      required: true,
      format: "int64",
    },
    pass: {
      baseName: "pass",
      type: "number",
      required: true,
      format: "int64",
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
    return RuleBasedViewRuleStats.attributeTypeMap;
  }

  public constructor() {}
}
