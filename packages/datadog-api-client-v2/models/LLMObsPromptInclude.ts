/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Includes messages from a specific version of another prompt. Omitting `items` includes every message from that version in its original order. When `items` is present, messages are included in the specified order, including repetitions.
 */
export class LLMObsPromptInclude {
  /**
   * Zero-based indexes of messages from the included prompt. For example, `[2, 0, 0]` includes the third message, followed by the first message twice. Omit this field to include all messages in their original order.
   */
  "items"?: Array<number>;
  /**
   * Customer-provided identifier of the included prompt.
   */
  "promptId": string;
  /**
   * Positive sequential version number of the included prompt.
   */
  "version": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    items: {
      baseName: "items",
      type: "Array<number>",
    },
    promptId: {
      baseName: "prompt_id",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsPromptInclude.attributeTypeMap;
  }

  public constructor() {}
}
