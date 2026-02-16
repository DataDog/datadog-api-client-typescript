import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatHistoryItem } from "./ChatHistoryItem";
import { DataTransformationContext } from "./DataTransformationContext";
import { DataTransformationLanguage } from "./DataTransformationLanguage";

export class DataTransformationRequest {
  /**
   * Previous chat messages for iterative interaction.
   */
  "chatHistory"?: Array<ChatHistoryItem>;
  "context"?: DataTransformationContext;
  /**
   * The programming language for the transformation.
   */
  "language"?: DataTransformationLanguage;
  /**
   * Whether to stream the response.
   */
  "stream"?: boolean;
  /**
   * The user's prompt describing the desired transformation.
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
    chatHistory: {
      baseName: "chatHistory",
      type: "Array<ChatHistoryItem>",
    },
    context: {
      baseName: "context",
      type: "DataTransformationContext",
    },
    language: {
      baseName: "language",
      type: "DataTransformationLanguage",
    },
    stream: {
      baseName: "stream",
      type: "boolean",
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
    return DataTransformationRequest.attributeTypeMap;
  }

  public constructor() {}
}
