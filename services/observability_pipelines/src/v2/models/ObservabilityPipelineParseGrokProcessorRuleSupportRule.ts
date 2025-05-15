import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Grok helper rule referenced in the parsing rules.
 */
export class ObservabilityPipelineParseGrokProcessorRuleSupportRule {
  /**
   * The name of the Grok helper rule.
   */
  "name": string;
  /**
   * The definition of the Grok helper rule.
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
    return ObservabilityPipelineParseGrokProcessorRuleSupportRule.attributeTypeMap;
  }

  public constructor() {}
}
