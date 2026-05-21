import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsInferenceContent } from "./LLMObsInferenceContent";
import { LLMObsInferenceToolCall } from "./LLMObsInferenceToolCall";
import { LLMObsInferenceToolResult } from "./LLMObsInferenceToolResult";

/**
 * A single message in an LLM inference conversation.
 */
export class LLMObsInferenceMessage {
  /**
   * Plain text content of the message.
   */
  "content"?: string;
  /**
   * List of structured content blocks in a message.
   */
  "contents"?: Array<LLMObsInferenceContent>;
  /**
   * Unique identifier for the message.
   */
  "id"?: string;
  /**
   * The role of the message author.
   */
  "role"?: string;
  /**
   * List of tool calls in a message.
   */
  "toolCalls"?: Array<LLMObsInferenceToolCall>;
  /**
   * List of tool results in a message.
   */
  "toolResults"?: Array<LLMObsInferenceToolResult>;
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
    content: {
      baseName: "content",
      type: "string",
    },
    contents: {
      baseName: "contents",
      type: "Array<LLMObsInferenceContent>",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    role: {
      baseName: "role",
      type: "string",
    },
    toolCalls: {
      baseName: "tool_calls",
      type: "Array<LLMObsInferenceToolCall>",
    },
    toolResults: {
      baseName: "tool_results",
      type: "Array<LLMObsInferenceToolResult>",
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
    return LLMObsInferenceMessage.attributeTypeMap;
  }

  public constructor() {}
}
