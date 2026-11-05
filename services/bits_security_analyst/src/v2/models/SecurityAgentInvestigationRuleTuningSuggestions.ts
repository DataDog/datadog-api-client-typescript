import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationRuleTuningSuggestion } from "./SecurityAgentInvestigationRuleTuningSuggestion";

/**
 * Suggestions to tune the detection rule that generated the signal.
 */
export class SecurityAgentInvestigationRuleTuningSuggestions {
  /**
   * Length of the window, in days.
   */
  "occurrenceWindowDays": number;
  /**
   * Why tuning the rule is suggested.
   */
  "reasoning": string;
  /**
   * ID of the detection rule.
   */
  "ruleId": string;
  /**
   * Name of the detection rule.
   */
  "ruleName": string;
  /**
   * Number of signals the rule generated in the window.
   */
  "ruleSignalTotal": number;
  /**
   * The tuning suggestions.
   */
  "suggestions": Array<SecurityAgentInvestigationRuleTuningSuggestion>;
  /**
   * Summary of the suggestions.
   */
  "summary": string;
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
    occurrenceWindowDays: {
      baseName: "occurrence_window_days",
      type: "number",
      required: true,
      format: "int64",
    },
    reasoning: {
      baseName: "reasoning",
      type: "string",
      required: true,
    },
    ruleId: {
      baseName: "rule_id",
      type: "string",
      required: true,
    },
    ruleName: {
      baseName: "rule_name",
      type: "string",
      required: true,
    },
    ruleSignalTotal: {
      baseName: "rule_signal_total",
      type: "number",
      required: true,
      format: "int64",
    },
    suggestions: {
      baseName: "suggestions",
      type: "Array<SecurityAgentInvestigationRuleTuningSuggestion>",
      required: true,
    },
    summary: {
      baseName: "summary",
      type: "string",
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
    return SecurityAgentInvestigationRuleTuningSuggestions.attributeTypeMap;
  }

  public constructor() {}
}
