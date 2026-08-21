import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single chat message in a prompt template.
 */
export class LLMObsPromptChatMessage {
  /**
   * Content of the message.
   */
  "content": string;
  /**
   * Role of the message (for example `system`, `user`, or `assistant`).
   */
  "role": string;
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
    return LLMObsPromptChatMessage.attributeTypeMap;
  }

  public constructor() {}
}
