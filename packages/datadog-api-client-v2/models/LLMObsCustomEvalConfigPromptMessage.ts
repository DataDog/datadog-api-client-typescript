/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCustomEvalConfigPromptContent } from "./LLMObsCustomEvalConfigPromptContent";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A message in the prompt template for a custom LLM judge evaluator.
 */
export class LLMObsCustomEvalConfigPromptMessage {
  /**
   * Text content of the message.
   */
  "content"?: string;
  /**
   * Multi-part content blocks for the message.
   */
  "contents"?: Array<LLMObsCustomEvalConfigPromptContent>;
  /**
   * Role of the message author.
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
    },
    contents: {
      baseName: "contents",
      type: "Array<LLMObsCustomEvalConfigPromptContent>",
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
    return LLMObsCustomEvalConfigPromptMessage.attributeTypeMap;
  }

  public constructor() {}
}
