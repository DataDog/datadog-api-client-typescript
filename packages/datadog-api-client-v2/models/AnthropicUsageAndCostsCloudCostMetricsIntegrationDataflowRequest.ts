/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Anthropic costs by model, workspace, and service tier, in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Requires Cloud Cost Management on your Datadog organization. Without it, this dataflow collects no data. Cost data appears in Cloud Cost Management within 24 to 48 hours of enabling this dataflow.
 */
export class AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`. Set to `true` to start collection.
   */
  "enabled"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
