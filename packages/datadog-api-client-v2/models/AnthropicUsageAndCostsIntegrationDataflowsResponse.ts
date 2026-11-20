/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowResponse } from "./AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowResponse";
import { AnthropicUsageAndCostsDailyUsageDoraMetricsIntegrationDataflowResponse } from "./AnthropicUsageAndCostsDailyUsageDoraMetricsIntegrationDataflowResponse";
import { AnthropicUsageAndCostsUsageMetricsIntegrationDataflowResponse } from "./AnthropicUsageAndCostsUsageMetricsIntegrationDataflowResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from Anthropic Usage and Costs, keyed by dataflow ID.
 */
export class AnthropicUsageAndCostsIntegrationDataflowsResponse {
  /**
   * Anthropic costs by model, workspace, and service tier, in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Requires Cloud Cost Management on your Datadog organization. Without it, this dataflow collects no data.
   */
  "anthropicCloudCostMetrics"?: AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowResponse;
  /**
   * Anthropic usage metrics, such as input, output, and cache token consumption by model, workspace, and service tier. With an Analytics API key, usage is also broken down by user, product, context window, inference geography, and speed. This dataflow is always on and cannot be turned off, which is why it appears in responses only.
   */
  "anthropicUsageMetrics"?: AnthropicUsageAndCostsUsageMetricsIntegrationDataflowResponse;
  /**
   * Daily Claude usage data used for DORA Metrics. This dataflow is always on and cannot be turned off, which is why it appears in responses only.
   */
  "claudeDailyUsageDoraMetrics"?: AnthropicUsageAndCostsDailyUsageDoraMetricsIntegrationDataflowResponse;

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
    anthropicCloudCostMetrics: {
      baseName: "anthropic-cloud-cost-metrics",
      type: "AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowResponse",
    },
    anthropicUsageMetrics: {
      baseName: "anthropic-usage-metrics",
      type: "AnthropicUsageAndCostsUsageMetricsIntegrationDataflowResponse",
    },
    claudeDailyUsageDoraMetrics: {
      baseName: "claude-daily-usage-dora-metrics",
      type: "AnthropicUsageAndCostsDailyUsageDoraMetricsIntegrationDataflowResponse",
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
    return AnthropicUsageAndCostsIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
