/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnthropicMetadata } from "./LLMObsAnthropicMetadata";
import { LLMObsAzureOpenAIMetadata } from "./LLMObsAzureOpenAIMetadata";
import { LLMObsBedrockMetadata } from "./LLMObsBedrockMetadata";
import { LLMObsInferenceMessage } from "./LLMObsInferenceMessage";
import { LLMObsInferenceTool } from "./LLMObsInferenceTool";
import { LLMObsOpenAIMetadata } from "./LLMObsOpenAIMetadata";
import { LLMObsVertexAIMetadata } from "./LLMObsVertexAIMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parameters for an LLM inference request.
 */
export class LLMObsIntegrationInferenceRequest {
  /**
   * Anthropic-specific metadata for an inference request.
   */
  "anthropicMetadata"?: LLMObsAnthropicMetadata;
  /**
   * Azure OpenAI-specific metadata for an integration account or inference request.
   */
  "azureOpenaiMetadata"?: LLMObsAzureOpenAIMetadata;
  /**
   * Amazon Bedrock-specific metadata for an inference request.
   */
  "bedrockMetadata"?: LLMObsBedrockMetadata;
  /**
   * Penalty for token frequency to reduce repetition.
   */
  "frequencyPenalty"?: number;
  /**
   * JSON schema for structured output, if supported by the model.
   */
  "jsonSchema"?: string;
  /**
   * Maximum number of completion tokens to generate (alternative to max_tokens for some providers).
   */
  "maxCompletionTokens"?: number;
  /**
   * Maximum number of tokens to generate.
   */
  "maxTokens"?: number;
  /**
   * List of messages in an inference conversation.
   */
  "messages": Array<LLMObsInferenceMessage>;
  /**
   * The model identifier to use for inference.
   */
  "modelId": string;
  /**
   * OpenAI-specific metadata for an inference request.
   */
  "openaiMetadata"?: LLMObsOpenAIMetadata;
  /**
   * Penalty for token presence to encourage topic diversity.
   */
  "presencePenalty"?: number;
  /**
   * Sampling temperature between 0 and 2. Higher values produce more random output.
   */
  "temperature"?: number;
  /**
   * List of tools available to the model.
   */
  "tools"?: Array<LLMObsInferenceTool>;
  /**
   * Top-K sampling parameter.
   */
  "topK"?: number;
  /**
   * Nucleus sampling probability mass.
   */
  "topP"?: number;
  /**
   * Vertex AI-specific metadata for an integration account or inference request.
   */
  "vertexAiMetadata"?: LLMObsVertexAIMetadata;

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
    anthropicMetadata: {
      baseName: "anthropic_metadata",
      type: "LLMObsAnthropicMetadata",
    },
    azureOpenaiMetadata: {
      baseName: "azure_openai_metadata",
      type: "LLMObsAzureOpenAIMetadata",
    },
    bedrockMetadata: {
      baseName: "bedrock_metadata",
      type: "LLMObsBedrockMetadata",
    },
    frequencyPenalty: {
      baseName: "frequency_penalty",
      type: "number",
      format: "double",
    },
    jsonSchema: {
      baseName: "json_schema",
      type: "string",
    },
    maxCompletionTokens: {
      baseName: "max_completion_tokens",
      type: "number",
      format: "int64",
    },
    maxTokens: {
      baseName: "max_tokens",
      type: "number",
      format: "int64",
    },
    messages: {
      baseName: "messages",
      type: "Array<LLMObsInferenceMessage>",
      required: true,
    },
    modelId: {
      baseName: "model_id",
      type: "string",
      required: true,
    },
    openaiMetadata: {
      baseName: "openai_metadata",
      type: "LLMObsOpenAIMetadata",
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
    tools: {
      baseName: "tools",
      type: "Array<LLMObsInferenceTool>",
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
    vertexAiMetadata: {
      baseName: "vertex_ai_metadata",
      type: "LLMObsVertexAIMetadata",
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
    return LLMObsIntegrationInferenceRequest.attributeTypeMap;
  }

  public constructor() {}
}
