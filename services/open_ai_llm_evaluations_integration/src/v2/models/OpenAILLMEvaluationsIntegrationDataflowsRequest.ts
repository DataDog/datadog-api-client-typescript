import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest } from "./OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest";
import { OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest } from "./OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest";

/**
 * Data Datadog collects from OpenAI LLM Evaluations, keyed by dataflow ID. Each dataflow turns on a distinct type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values.
 */
export class OpenAILLMEvaluationsIntegrationDataflowsRequest {
  /**
   * Makes the key in `authentication` available to run evaluations in [LLM Observability](https://docs.datadoghq.com/llm_observability/). While this dataflow is enabled, a key that cannot call the OpenAI chat completions endpoint is rejected with a `422` response.
   */
  "openaiLlmCompletions"?: OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest;
  /**
   * Costs of the OpenAI project that the key in `authentication` belongs to, which you can analyze in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Cost data appears in Cloud Cost Management within 24 hours after you enable this dataflow.
   */
  "openaiProjectCloudCostData"?: OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    openaiLlmCompletions: {
      baseName: "openai-llm-completions",
      type: "OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest",
    },
    openaiProjectCloudCostData: {
      baseName: "openai-project-cloud-cost-data",
      type: "OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAILLMEvaluationsIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
