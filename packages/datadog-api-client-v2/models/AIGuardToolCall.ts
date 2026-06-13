/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardToolCallFunction } from "./AIGuardToolCallFunction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A tool call issued by the assistant.
 */
export class AIGuardToolCall {
  /**
   * The function definition within a tool call.
   */
  "_function": AIGuardToolCallFunction;
  /**
   * The unique identifier of the tool call.
   */
  "id": string;

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
    _function: {
      baseName: "function",
      type: "AIGuardToolCallFunction",
      required: true,
    },
    id: {
      baseName: "id",
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
    return AIGuardToolCall.attributeTypeMap;
  }

  public constructor() {}
}
