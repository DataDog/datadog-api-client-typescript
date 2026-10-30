/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardMessageContent } from "./AIGuardMessageContent";
import { AIGuardMessageRole } from "./AIGuardMessageRole";
import { AIGuardToolCall } from "./AIGuardToolCall";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A message in the conversation. Content is required for user, system,
 * developer, and tool messages, but may be omitted for assistant messages.
 * For those non-assistant roles, a plain content string may be empty, but a
 * multipart content array must contain at least one valid content part.
 * Only assistant messages may contain tool calls, and tool call entries must
 * not be null. Tool messages must include a non-empty `tool_call_id`; other
 * message roles must not include a non-empty `tool_call_id`.
 */
export class AIGuardMessage {
  /**
   * The content of a message, either a plain string or a list of OpenAI-style content parts.
   */
  "content"?: AIGuardMessageContent;
  /**
   * The role of the message author in the conversation.
   */
  "role": AIGuardMessageRole;
  /**
   * The identifier of the tool call this message responds to, present on tool result messages.
   */
  "toolCallId"?: string;
  /**
   * The tool calls emitted by the assistant, present on assistant messages that call tools.
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
