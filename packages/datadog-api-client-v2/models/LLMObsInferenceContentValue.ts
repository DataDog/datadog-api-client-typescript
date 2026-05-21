/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsInferenceToolCall } from "./LLMObsInferenceToolCall";
import { LLMObsInferenceToolResult } from "./LLMObsInferenceToolResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The typed value of a message content block.
 */
export class LLMObsInferenceContentValue {
  /**
   * Plain text content.
   */
  "text"?: string;
  /**
   * A tool call made during LLM inference.
   */
  "toolCall"?: LLMObsInferenceToolCall;
  /**
   * The result returned by a tool call during LLM inference.
   */
  "toolCallResult"?: LLMObsInferenceToolResult;

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
      type: "LLMObsInferenceToolCall",
    },
    toolCallResult: {
      baseName: "tool_call_result",
      type: "LLMObsInferenceToolResult",
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
    return LLMObsInferenceContentValue.attributeTypeMap;
  }

  public constructor() {}
}
