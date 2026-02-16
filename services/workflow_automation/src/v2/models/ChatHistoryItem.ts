import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatHistoryItemRole } from "./ChatHistoryItemRole";

export class ChatHistoryItem {
  /**
   * The message content.
   */
  "content": string;
  /**
   * The role of the message sender.
   */
  "role": ChatHistoryItemRole;
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
      required: true,
    },
    role: {
      baseName: "role",
      type: "ChatHistoryItemRole",
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
    return ChatHistoryItem.attributeTypeMap;
  }

  public constructor() {}
}
