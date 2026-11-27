/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAIModelInferenceLLMCompletionsIntegrationDataflowRequest } from "./OpenAIModelInferenceLLMCompletionsIntegrationDataflowRequest";
import { OpenAIModelInferenceProjectCloudCostDataIntegrationDataflowRequest } from "./OpenAIModelInferenceProjectCloudCostDataIntegrationDataflowRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from OpenAI Model Inference, keyed by dataflow ID. Each dataflow turns on a distinct type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values.
 */
export class OpenAIModelInferenceIntegrationDataflowsRequest {
  /**
   * Makes the key in `authentication` available to run evaluations in [LLM Observability](https://docs.datadoghq.com/llm_observability/). While this dataflow is enabled, the API returns a `422` response for a key that cannot call the OpenAI chat completions endpoint.
   */
  "openaiLlmCompletions"?: OpenAIModelInferenceLLMCompletionsIntegrationDataflowRequest;
  /**
   * Costs of the OpenAI project that owns the key in `authentication`. Analyze these costs in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Cost data appears in Cloud Cost Management within 24 hours after you enable this dataflow.
   */
  "openaiProjectCloudCostData"?: OpenAIModelInferenceProjectCloudCostDataIntegrationDataflowRequest;

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
      type: "OpenAIModelInferenceLLMCompletionsIntegrationDataflowRequest",
    },
    openaiProjectCloudCostData: {
      baseName: "openai-project-cloud-cost-data",
      type: "OpenAIModelInferenceProjectCloudCostDataIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAIModelInferenceIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
