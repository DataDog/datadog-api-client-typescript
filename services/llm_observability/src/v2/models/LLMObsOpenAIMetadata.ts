import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsOpenAIReasoningEffort } from "./LLMObsOpenAIReasoningEffort";
import { LLMObsOpenAIReasoningSummary } from "./LLMObsOpenAIReasoningSummary";

/**
 * OpenAI-specific metadata for an inference request.
 */
export class LLMObsOpenAIMetadata {
  /**
   * The reasoning effort level for OpenAI models that support it.
   */
  "reasoningEffort"?: LLMObsOpenAIReasoningEffort;
  /**
   * The verbosity of the reasoning summary.
   */
  "reasoningSummary"?: LLMObsOpenAIReasoningSummary;
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
    reasoningEffort: {
      baseName: "reasoning_effort",
      type: "LLMObsOpenAIReasoningEffort",
    },
    reasoningSummary: {
      baseName: "reasoning_summary",
      type: "LLMObsOpenAIReasoningSummary",
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
    return LLMObsOpenAIMetadata.attributeTypeMap;
  }

  public constructor() {}
}
