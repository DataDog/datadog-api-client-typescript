import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardMessageContent } from "./AIGuardMessageContent";
import { AIGuardMessageRole } from "./AIGuardMessageRole";
import { AIGuardToolCall } from "./AIGuardToolCall";

/**
 * A single message in the conversation to evaluate.
 */
export class AIGuardMessage {
  /**
   * The message content, either a plain string or an array of content parts.
   */
  "content"?: AIGuardMessageContent;
  /**
   * The role of the message author in the conversation.
   */
  "role": AIGuardMessageRole;
  /**
   * The ID of the tool call this message is responding to, required for tool messages.
   */
  "toolCallId"?: string;
  /**
   * Tool calls issued by the assistant in this message.
   */
  "toolCalls"?: Array<AIGuardToolCall>;
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
      type: "AIGuardMessageContent",
    },
    role: {
      baseName: "role",
      type: "AIGuardMessageRole",
      required: true,
    },
    toolCallId: {
      baseName: "tool_call_id",
      type: "string",
    },
    toolCalls: {
      baseName: "tool_calls",
      type: "Array<AIGuardToolCall>",
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
    return AIGuardMessage.attributeTypeMap;
  }

  public constructor() {}
}
