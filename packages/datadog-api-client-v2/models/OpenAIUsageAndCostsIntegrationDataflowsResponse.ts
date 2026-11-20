/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAIUsageAndCostsCloudCostDataIntegrationDataflowResponse } from "./OpenAIUsageAndCostsCloudCostDataIntegrationDataflowResponse";
import { OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse } from "./OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from OpenAI Usage and Costs, keyed by dataflow ID.
 */
export class OpenAIUsageAndCostsIntegrationDataflowsResponse {
  /**
   * OpenAI organization costs, which you can analyze in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). See [collected data](https://docs.datadoghq.com/cloud_cost_management/saas_costs/?tab=openai#data-collected) for what is included.
   */
  "openaiCloudCostData"?: OpenAIUsageAndCostsCloudCostDataIntegrationDataflowResponse;
  /**
   * Organization usage metrics under the `openai.*` namespace, such as `openai.completions.*`, `openai.embeddings.*`, `openai.images.*`, `openai.moderations.*`, `openai.audio_speeches.*`, `openai.audio_transcriptions.*`, `openai.code_interpreter_sessions.*`, and `openai.vector_stores.*`. This dataflow is always on and cannot be turned off, so it appears only in responses.
   */
  "openaiUsageMetrics"?: OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse;

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
    openaiCloudCostData: {
      baseName: "openai-cloud-cost-data",
      type: "OpenAIUsageAndCostsCloudCostDataIntegrationDataflowResponse",
    },
    openaiUsageMetrics: {
      baseName: "openai-usage-metrics",
      type: "OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse",
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
    return OpenAIUsageAndCostsIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
