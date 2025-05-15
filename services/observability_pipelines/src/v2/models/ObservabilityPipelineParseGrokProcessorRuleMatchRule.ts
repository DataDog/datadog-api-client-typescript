import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines a Grok parsing rule, which extracts structured fields from log content using named Grok patterns.
 * Each rule must have a unique name and a valid Datadog Grok pattern that will be applied to the source field.
 */
export class ObservabilityPipelineParseGrokProcessorRuleMatchRule {
  /**
   * The name of the rule.
   */
  "name": string;
  /**
   * The definition of the Grok rule.
   */
  "rule": string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rule: {
      baseName: "rule",
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
    return ObservabilityPipelineParseGrokProcessorRuleMatchRule.attributeTypeMap;
  }

  public constructor() {}
}
