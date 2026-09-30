/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptMessagePlaceholderType } from "./LLMObsPromptMessagePlaceholderType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
