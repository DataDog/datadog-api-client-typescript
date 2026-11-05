/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationRuleTuningSuggestion } from "./SecurityAgentInvestigationRuleTuningSuggestion";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Suggestions to tune the detection rule that generated the signal.
 */
export class SecurityAgentInvestigationRuleTuningSuggestions {
  /**
   * Length of the window, in days.
   */
  "occurrenceWindowDays": Int64;
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
  "ruleSignalTotal": Int64;
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
