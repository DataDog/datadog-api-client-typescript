/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptInclude } from "./LLMObsPromptInclude";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
