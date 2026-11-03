/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The model's internal reasoning or thinking output, if available.
 */
export class LLMObsInternalReasoning {
  /**
   * Number of tokens used for internal reasoning.
   */
  "reasoningTokens"?: number;
  /**
   * The reasoning text produced by the model.
   */
  "text": string;

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
    reasoningTokens: {
      baseName: "reasoning_tokens",
      type: "number",
      format: "int64",
    },
    text: {
      baseName: "text",
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
    return LLMObsInternalReasoning.attributeTypeMap;
  }

  public constructor() {}
}
