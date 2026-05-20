/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A tool call made during a span.
 */
export class LLMObsSpanToolCall {
  /**
   * Arguments passed to the tool.
   */
  "arguments"?: { [key: string]: any };
  /**
   * Name of the tool called.
   */
  "name"?: string;
  /**
   * Identifier of the tool call.
   */
  "toolId"?: string;
  /**
   * Type of the tool call.
   */
  "type"?: string;

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
    arguments: {
      baseName: "arguments",
      type: "{ [key: string]: any; }",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    toolId: {
      baseName: "tool_id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return LLMObsSpanToolCall.attributeTypeMap;
  }

  public constructor() {}
}
