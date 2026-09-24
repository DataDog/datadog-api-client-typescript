import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptInclude } from "./LLMObsPromptInclude";

/**
 * Includes all or selected messages from a specific version of another prompt.
 */
export class LLMObsPromptIncludeItem {
  /**
   * Includes messages from a specific version of another prompt. Omitting `items` includes every message from that version in its original order. When `items` is present, messages are included in the specified order, including repetitions.
   */
  "include": LLMObsPromptInclude;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    include: {
      baseName: "include",
      type: "LLMObsPromptInclude",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsPromptIncludeItem.attributeTypeMap;
  }

  public constructor() {}
}
