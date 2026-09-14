/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptInclude } from "./LLMObsPromptInclude";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An explicitly versioned whole-chat or selective-message include.
 */
export class LLMObsPromptIncludeItem {
  /**
   * An explicitly versioned prompt included as chat items. Omitting `items` includes every child message in its original order. When `items` is present, its zero-based indexes are inserted in the order provided; duplicate indexes are preserved.
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
