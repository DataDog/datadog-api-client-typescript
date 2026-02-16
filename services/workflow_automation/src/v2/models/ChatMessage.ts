import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatMessageRole } from "./ChatMessageRole";

export class ChatMessage {
  /**
   * The chat ID.
   */
  "chatId": string;
  /**
   * The message content.
   */
  "content": string;
  /**
   * The message ID.
   */
  "id": string;
  /**
   * The role of the message sender.
   */
  "role": ChatMessageRole;
  /**
   * The UUID of the user who sent the message.
   */
  "userUuid"?: string;
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
    chatId: {
      baseName: "chatId",
      type: "string",
      required: true,
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    role: {
      baseName: "role",
      type: "ChatMessageRole",
      required: true,
    },
    userUuid: {
      baseName: "userUuid",
      type: "string",
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
    return ChatMessage.attributeTypeMap;
  }

  public constructor() {}
}
