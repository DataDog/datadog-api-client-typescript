import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsInferenceToolCall } from "./LLMObsInferenceToolCall";
import { LLMObsInferenceToolResult } from "./LLMObsInferenceToolResult";

/**
 * The typed value of a message content block.
 */
export class LLMObsInferenceContentValue {
  /**
   * Plain text content.
   */
  "text"?: string;
  /**
   * A tool call made during LLM inference.
   */
  "toolCall"?: LLMObsInferenceToolCall;
  /**
   * The result returned by a tool call during LLM inference.
   */
  "toolCallResult"?: LLMObsInferenceToolResult;
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
    text: {
      baseName: "text",
      type: "string",
    },
    toolCall: {
      baseName: "tool_call",
      type: "LLMObsInferenceToolCall",
    },
    toolCallResult: {
      baseName: "tool_call_result",
      type: "LLMObsInferenceToolResult",
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
    return LLMObsInferenceContentValue.attributeTypeMap;
  }

  public constructor() {}
}
