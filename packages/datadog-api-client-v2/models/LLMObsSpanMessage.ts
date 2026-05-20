/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsSpanToolCall } from "./LLMObsSpanToolCall";
import { LLMObsSpanToolResult } from "./LLMObsSpanToolResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single message in a span input or output.
 */
export class LLMObsSpanMessage {
  /**
   * Text content of the message.
   */
  "content"?: string;
  /**
   * Unique identifier of the message.
   */
  "id"?: string;
  /**
   * Role of the message sender (e.g., user, assistant, system).
   */
  "role"?: string;
  /**
   * Tool calls made in this message.
   */
  "toolCalls"?: Array<LLMObsSpanToolCall>;
  /**
   * Tool results returned in this message.
   */
  "toolResults"?: Array<LLMObsSpanToolResult>;

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
    id: {
      baseName: "id",
      type: "string",
    },
    role: {
      baseName: "role",
      type: "string",
    },
    toolCalls: {
      baseName: "tool_calls",
      type: "Array<LLMObsSpanToolCall>",
    },
    toolResults: {
      baseName: "tool_results",
      type: "Array<LLMObsSpanToolResult>",
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
    return LLMObsSpanMessage.attributeTypeMap;
  }

  public constructor() {}
}
