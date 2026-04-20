/**
 * Create or update a custom evaluator configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsCustomEvalConfig"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiUpdateLLMObsCustomEvalConfigRequest = {
  body: {
    data: {
      attributes: {
        category: "Custom",
        evalName: "my-custom-evaluator",
        llmJudgeConfig: {
          assessmentCriteria: {
            maxThreshold: 1.0,
            minThreshold: 0.7,
            passValues: ["pass", "yes"],
            passWhen: true,
          },
          inferenceParams: {
            frequencyPenalty: 0.0,
            maxTokens: 1024,
            presencePenalty: 0.0,
            temperature: 0.7,
            topK: 50,
            topP: 1.0,
          },
          lastUsedLibraryPromptTemplateName: "sentiment-analysis-v1",
          modifiedLibraryPromptTemplate: false,
          outputSchema: undefined,
          parsingType: "structured_output",
          promptTemplate: [
            {
              content: "Rate the quality of the following response:",
              contents: [
                {
                  type: "text",
                  value: {
                    text: "What is the sentiment of this review?",
                    toolCall: {
                      arguments: `{"location": "San Francisco"}`,
                      id: "call_abc123",
                      name: "get_weather",
                      type: "function",
                    },
                    toolCallResult: {
                      name: "get_weather",
                      result: "sunny, 72F",
                      toolId: "call_abc123",
                      type: "function",
                    },
                  },
                },
              ],
              role: "user",
            },
          ],
        },
        llmProvider: {
          bedrock: {
            region: "us-east-1",
          },
          integrationAccountId: "my-account-id",
          integrationProvider: "openai",
          modelName: "gpt-4o",
          vertexAi: {
            location: "us-central1",
            project: "my-gcp-project",
          },
        },
        target: {
          applicationName: "my-llm-app",
          enabled: true,
          evalScope: "span",
          filter: "@service:my-service",
          rootSpansOnly: true,
          samplingPercentage: 50.0,
        },
      },
      id: "my-custom-evaluator",
      type: "evaluator_config",
    },
  },
  evalName: "eval_name",
};

apiInstance
  .updateLLMObsCustomEvalConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
