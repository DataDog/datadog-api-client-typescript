import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnalysisRuleResponse } from "./AnalysisRuleResponse";

/**
 * The attributes of the analysis response, containing rule results and any top-level errors.
 */
export class AnalysisResponseDataAttributes {
  /**
   * Top-level error messages encountered during the analysis operation.
   */
  "errors": Array<string>;
  /**
   * The list of results for each static analysis rule applied during analysis.
   */
  "ruleResponses": Array<AnalysisRuleResponse>;
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
    errors: {
      baseName: "errors",
      type: "Array<string>",
      required: true,
    },
    ruleResponses: {
      baseName: "rule_responses",
      type: "Array<AnalysisRuleResponse>",
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
    return AnalysisResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
