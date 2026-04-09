/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineParseGrokProcessorRuleMatchRule } from "./ObservabilityPipelineParseGrokProcessorRuleMatchRule";
import { ObservabilityPipelineParseGrokProcessorRuleSupportRule } from "./ObservabilityPipelineParseGrokProcessorRuleSupportRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * The name of the field in the log event to apply the Grok rules to.
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
