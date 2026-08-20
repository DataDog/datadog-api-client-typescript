import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnthropicEffort } from "./LLMObsAnthropicEffort";
import { LLMObsAnthropicThinkingConfig } from "./LLMObsAnthropicThinkingConfig";

/**
 * Anthropic-specific metadata for an inference request.
 */
export class LLMObsAnthropicMetadata {
  /**
   * The effort level for Anthropic inference.
   */
  "effort"?: LLMObsAnthropicEffort;
  /**
   * Configuration for Anthropic extended thinking feature.
   */
  "thinking"?: LLMObsAnthropicThinkingConfig;
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
    effort: {
      baseName: "effort",
      type: "LLMObsAnthropicEffort",
    },
    thinking: {
      baseName: "thinking",
      type: "LLMObsAnthropicThinkingConfig",
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
    return LLMObsAnthropicMetadata.attributeTypeMap;
  }

  public constructor() {}
}
