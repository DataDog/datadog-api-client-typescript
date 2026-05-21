import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnthropicMetadata } from "./LLMObsAnthropicMetadata";
import { LLMObsAzureOpenAIMetadata } from "./LLMObsAzureOpenAIMetadata";
import { LLMObsBedrockMetadata } from "./LLMObsBedrockMetadata";
import { LLMObsInferenceErrorResponse } from "./LLMObsInferenceErrorResponse";
import { LLMObsInferenceMessage } from "./LLMObsInferenceMessage";
import { LLMObsInferenceRunResult } from "./LLMObsInferenceRunResult";
import { LLMObsInferenceTool } from "./LLMObsInferenceTool";
import { LLMObsOpenAIMetadata } from "./LLMObsOpenAIMetadata";
import { LLMObsVertexAIMetadata } from "./LLMObsVertexAIMetadata";

/**
 * The result of an LLM inference request, including input parameters and the model response.
 */
export class LLMObsIntegrationInferenceResponse {
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
   * Error details returned when an inference provider returns an error.
   */
  "errorResponse"?: LLMObsInferenceErrorResponse;
  /**
   * Frequency penalty that was applied.
   */
  "frequencyPenalty"?: number;
  /**
   * JSON schema that was applied for structured output.
   */
  "jsonSchema"?: string;
  /**
   * Maximum number of completion tokens that were configured.
   */
  "maxCompletionTokens"?: number;
  /**
   * Maximum number of tokens that were configured.
   */
  "maxTokens"?: number;
  /**
   * List of messages in an inference conversation.
   */
  "messages": Array<LLMObsInferenceMessage>;
  /**
   * The model identifier used for inference.
   */
  "modelId": string;
  /**
   * OpenAI-specific metadata for an inference request.
   */
  "openaiMetadata"?: LLMObsOpenAIMetadata;
  /**
   * Presence penalty that was applied.
   */
  "presencePenalty"?: number;
  /**
   * The output of a completed LLM inference call.
   */
  "response": LLMObsInferenceRunResult;
  /**
   * Sampling temperature that was used.
   */
  "temperature"?: number;
  /**
   * List of tools available to the model.
   */
  "tools"?: Array<LLMObsInferenceTool>;
  /**
   * Top-K sampling parameter that was used.
   */
  "topK"?: number;
  /**
   * Nucleus sampling parameter that was used.
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
    errorResponse: {
      baseName: "error_response",
      type: "LLMObsInferenceErrorResponse",
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
    response: {
      baseName: "response",
      type: "LLMObsInferenceRunResult",
      required: true,
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
    return LLMObsIntegrationInferenceResponse.attributeTypeMap;
  }

  public constructor() {}
}
