/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowResponse } from "./OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowResponse";
import { OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowResponse } from "./OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from OpenAI LLM Evaluations, keyed by dataflow ID.
 */
export class OpenAILLMEvaluationsIntegrationDataflowsResponse {
  /**
   * Makes the key in `authentication` available to run evaluations in [LLM Observability](https://docs.datadoghq.com/llm_observability/).
   */
  "openaiLlmCompletions"?: OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowResponse;
  /**
   * Costs of the OpenAI project that the key in `authentication` belongs to, which you can analyze in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/).
   */
  "openaiProjectCloudCostData"?: OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowResponse;

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
    openaiLlmCompletions: {
      baseName: "openai-llm-completions",
      type: "OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowResponse",
    },
    openaiProjectCloudCostData: {
      baseName: "openai-project-cloud-cost-data",
      type: "OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowResponse",
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
    return OpenAILLMEvaluationsIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
