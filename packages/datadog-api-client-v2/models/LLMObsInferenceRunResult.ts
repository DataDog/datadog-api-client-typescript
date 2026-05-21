/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsInferenceCode } from "./LLMObsInferenceCode";
import { LLMObsInferenceTool } from "./LLMObsInferenceTool";
import { LLMObsInternalReasoning } from "./LLMObsInternalReasoning";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The output of a completed LLM inference call.
 */
export class LLMObsInferenceRunResult {
  /**
   * An optional assessment of the inference output quality.
   */
  "assessment": string | null;
  /**
   * The text content of the model response.
   */
  "content": string;
  /**
   * The reason the model stopped generating tokens.
   */
  "finishReason": string;
  /**
   * List of generated code snippets for the inference configuration.
   */
  "inferenceCodes": Array<LLMObsInferenceCode>;
  /**
   * Number of input tokens consumed.
   */
  "inputTokens": number;
  /**
   * The model's internal reasoning or thinking output, if available.
   */
  "internalReasoning"?: LLMObsInternalReasoning;
  /**
   * Request latency in milliseconds.
   */
  "latency": number;
  /**
   * Number of output tokens generated.
   */
  "outputTokens": number;
  /**
   * List of tools available to the model.
   */
  "tools": Array<LLMObsInferenceTool>;
  /**
   * Total tokens used (input plus output).
   */
  "totalTokens": number;

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
    assessment: {
      baseName: "assessment",
      type: "string",
      required: true,
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    finishReason: {
      baseName: "finish_reason",
      type: "string",
      required: true,
    },
    inferenceCodes: {
      baseName: "inference_codes",
      type: "Array<LLMObsInferenceCode>",
      required: true,
    },
    inputTokens: {
      baseName: "input_tokens",
      type: "number",
      required: true,
      format: "int64",
    },
    internalReasoning: {
      baseName: "internal_reasoning",
      type: "LLMObsInternalReasoning",
    },
    latency: {
      baseName: "latency",
      type: "number",
      required: true,
      format: "int64",
    },
    outputTokens: {
      baseName: "output_tokens",
      type: "number",
      required: true,
      format: "int64",
    },
    tools: {
      baseName: "tools",
      type: "Array<LLMObsInferenceTool>",
      required: true,
    },
    totalTokens: {
      baseName: "total_tokens",
      type: "number",
      required: true,
      format: "int64",
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
    return LLMObsInferenceRunResult.attributeTypeMap;
  }

  public constructor() {}
}
