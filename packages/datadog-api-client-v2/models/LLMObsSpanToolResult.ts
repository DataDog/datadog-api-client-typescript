/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A result returned from a tool call during a span.
 */
export class LLMObsSpanToolResult {
  /**
   * Name of the tool that produced this result.
   */
  "name"?: string;
  /**
   * Result value returned by the tool.
   */
  "result"?: string;
  /**
   * Identifier of the corresponding tool call.
   */
  "toolId"?: string;
  /**
   * Type of the tool result.
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
    name: {
      baseName: "name",
      type: "string",
    },
    result: {
      baseName: "result",
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
    return LLMObsSpanToolResult.attributeTypeMap;
  }

  public constructor() {}
}
