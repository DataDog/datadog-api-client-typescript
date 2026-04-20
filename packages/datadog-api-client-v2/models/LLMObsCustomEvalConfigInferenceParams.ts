/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * LLM inference parameters for a custom evaluator.
 */
export class LLMObsCustomEvalConfigInferenceParams {
  /**
   * Frequency penalty to reduce repetition.
   */
  "frequencyPenalty"?: number;
  /**
   * Maximum number of tokens to generate.
   */
  "maxTokens"?: number;
  /**
   * Presence penalty to reduce repetition.
   */
  "presencePenalty"?: number;
  /**
   * Sampling temperature for the LLM.
   */
  "temperature"?: number;
  /**
   * Top-k sampling parameter.
   */
  "topK"?: number;
  /**
   * Top-p (nucleus) sampling parameter.
   */
  "topP"?: number;

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
    frequencyPenalty: {
      baseName: "frequency_penalty",
      type: "number",
      format: "double",
    },
    maxTokens: {
      baseName: "max_tokens",
      type: "number",
      format: "int64",
    },
    presencePenalty: {
      baseName: "presence_penalty",
      type: "number",
      format: "double",
    },
    temperature: {
      baseName: "temperature",
      type: "number",
      format: "double",
    },
    topK: {
      baseName: "top_k",
      type: "number",
      format: "int64",
    },
    topP: {
      baseName: "top_p",
      type: "number",
      format: "double",
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
    return LLMObsCustomEvalConfigInferenceParams.attributeTypeMap;
  }

  public constructor() {}
}
