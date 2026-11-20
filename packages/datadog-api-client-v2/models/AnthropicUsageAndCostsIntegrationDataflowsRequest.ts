/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest } from "./AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from Anthropic Usage and Costs, keyed by dataflow ID. Datadog always collects usage metrics. Each dataflow in this object adds another type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values. If a dataflow depends on a Datadog product, its description names that product. If you enable a dataflow without that product, Datadog stores the setting but collects no data.
 */
export class AnthropicUsageAndCostsIntegrationDataflowsRequest {
  /**
   * Anthropic costs by model, workspace, and service tier, in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Requires Cloud Cost Management on your Datadog organization. Without it, this dataflow collects no data. Cost data appears in Cloud Cost Management within 24 to 48 hours of enabling this dataflow.
   */
  "anthropicCloudCostMetrics"?: AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest;

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
      type: "AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AnthropicUsageAndCostsIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
