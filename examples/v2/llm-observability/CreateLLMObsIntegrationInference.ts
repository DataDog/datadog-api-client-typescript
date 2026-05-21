/**
 * Run an LLM inference returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsIntegrationInference"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCreateLLMObsIntegrationInferenceRequest = {
  body: {
    anthropicMetadata: {
      effort: "medium",
      thinking: {
        budgetTokens: 1024,
        type: "enabled",
      },
    },
    azureOpenaiMetadata: {
      deploymentId: "my-gpt4-deployment",
      modelVersion: "0613",
      resourceName: "my-azure-resource",
    },
    bedrockMetadata: {
      region: "us-east-1",
    },
    frequencyPenalty: 0.0,
    jsonSchema: `{"type":"object","properties":{"answer":{"type":"string"}}}`,
    maxCompletionTokens: 1024,
    maxTokens: 1024,
    messages: [
      {
        content: "What is the capital of France?",
        contents: [
          {
            type: "text",
            value: {
              text: "Hello, how can I help you?",
              toolCall: {
                arguments: {
                  location: "San Francisco",
                },
                name: "get_weather",
                toolId: "call_abc123",
                type: "function",
              },
              toolCallResult: {
                name: "get_weather",
                result: "The weather in San Francisco is 68°F and sunny.",
                toolId: "call_abc123",
                type: "function",
              },
            },
          },
        ],
        id: "msg_001",
        role: "user",
        toolCalls: [
          {
            arguments: {
              location: "San Francisco",
            },
            name: "get_weather",
            toolId: "call_abc123",
            type: "function",
          },
        ],
        toolResults: [
          {
            name: "get_weather",
            result: "The weather in San Francisco is 68°F and sunny.",
            toolId: "call_abc123",
            type: "function",
          },
        ],
      },
    ],
    modelId: "gpt-4o",
    openaiMetadata: {
      reasoningEffort: "medium",
      reasoningSummary: "auto",
    },
    presencePenalty: 0.0,
    temperature: 0.7,
    tools: [
      {
        _function: {
          description: "Get the current weather for a location.",
          name: "get_weather",
          parameters: {
            properties: "{'location': {'type': 'string'}}",
            type: "object",
          },
        },
        type: "function",
      },
    ],
    topK: 50,
    topP: 1.0,
    vertexAiMetadata: {
      location: "us-central1",
      project: "my-gcp-project",
      projectIds: ["my-gcp-project"],
    },
  },
  integration: "openai",
  accountId: "account_id",
};

apiInstance
  .createLLMObsIntegrationInference(params)
  .then((data: v2.LLMObsIntegrationInferenceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
