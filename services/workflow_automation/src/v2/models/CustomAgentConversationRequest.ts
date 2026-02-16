import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class CustomAgentConversationRequest {
  /**
   * The conversation ID to continue an existing conversation.
   */
  "conversationId"?: string;
  /**
   * Optional JSON schema to structure the output.
   */
  "outputSchema"?: any;
  /**
   * The user's prompt for the conversation.
   */
  "userPrompt": string;
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
    conversationId: {
      baseName: "conversationId",
      type: "string",
    },
    outputSchema: {
      baseName: "outputSchema",
      type: "any",
    },
    userPrompt: {
      baseName: "userPrompt",
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
    return CustomAgentConversationRequest.attributeTypeMap;
  }

  public constructor() {}
}
