import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnthropicThinkingType } from "./LLMObsAnthropicThinkingType";

/**
 * Configuration for Anthropic extended thinking feature.
 */
export class LLMObsAnthropicThinkingConfig {
  /**
   * Maximum token budget for extended thinking. Required when type is `enabled`.
   */
  "budgetTokens"?: number;
  /**
   * The thinking mode for Anthropic extended thinking.
   */
  "type": LLMObsAnthropicThinkingType;
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
    budgetTokens: {
      baseName: "budget_tokens",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "LLMObsAnthropicThinkingType",
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
    return LLMObsAnthropicThinkingConfig.attributeTypeMap;
  }

  public constructor() {}
}
