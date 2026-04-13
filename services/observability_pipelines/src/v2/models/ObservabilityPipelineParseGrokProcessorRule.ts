import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineParseGrokProcessorRuleMatchRule } from "./ObservabilityPipelineParseGrokProcessorRuleMatchRule";
import { ObservabilityPipelineParseGrokProcessorRuleSupportRule } from "./ObservabilityPipelineParseGrokProcessorRuleSupportRule";

/**
 * A Grok parsing rule used in the `parse_grok` processor. Each rule defines how to extract structured fields
 * from a specific log field using Grok patterns.
 */
export class ObservabilityPipelineParseGrokProcessorRule {
  /**
   * A list of Grok parsing rules that define how to extract fields from the source field.
   * Each rule must contain a name and a valid Grok pattern.
   */
  "matchRules": Array<ObservabilityPipelineParseGrokProcessorRuleMatchRule>;
  /**
   * The value of the source field in log events to be processed by the Grok rules.
   */
  "source": string;
  /**
   * A list of Grok helper rules that can be referenced by the parsing rules.
   */
  "supportRules"?: Array<ObservabilityPipelineParseGrokProcessorRuleSupportRule>;
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
    matchRules: {
      baseName: "match_rules",
      type: "Array<ObservabilityPipelineParseGrokProcessorRuleMatchRule>",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    supportRules: {
      baseName: "support_rules",
      type: "Array<ObservabilityPipelineParseGrokProcessorRuleSupportRule>",
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
    return ObservabilityPipelineParseGrokProcessorRule.attributeTypeMap;
  }

  public constructor() {}
}
