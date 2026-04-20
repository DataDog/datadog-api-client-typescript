/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCustomEvalConfigPromptToolCall } from "./LLMObsCustomEvalConfigPromptToolCall";
import { LLMObsCustomEvalConfigPromptToolResult } from "./LLMObsCustomEvalConfigPromptToolResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Value of a prompt message content block.
 */
export class LLMObsCustomEvalConfigPromptContentValue {
  /**
   * Text content of the message block.
   */
  "text"?: string;
  /**
   * A tool call within a prompt message.
   */
  "toolCall"?: LLMObsCustomEvalConfigPromptToolCall;
  /**
   * A tool call result within a prompt message.
   */
  "toolCallResult"?: LLMObsCustomEvalConfigPromptToolResult;

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
    text: {
      baseName: "text",
      type: "string",
    },
    toolCall: {
      baseName: "tool_call",
      type: "LLMObsCustomEvalConfigPromptToolCall",
    },
    toolCallResult: {
      baseName: "tool_call_result",
      type: "LLMObsCustomEvalConfigPromptToolResult",
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
    return LLMObsCustomEvalConfigPromptContentValue.attributeTypeMap;
  }

  public constructor() {}
}
