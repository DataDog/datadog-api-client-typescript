import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptMessagePlaceholderType } from "./LLMObsPromptMessagePlaceholderType";

/**
 * A named placeholder that inserts a list of messages when a compatible SDK formats the prompt.
 * **Preview:** Message placeholders are available in Preview. To request access, contact [Datadog Support](https://www.datadoghq.com/support/) or your Customer Success Manager.
 */
export class LLMObsPromptMessagePlaceholder {
  /**
   * Name used to supply the message list when formatting the prompt.
   */
  "name": string;
  /**
   * Type of chat-template item.
   */
  "type": LLMObsPromptMessagePlaceholderType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPromptMessagePlaceholderType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsPromptMessagePlaceholder.attributeTypeMap;
  }

  public constructor() {}
}
