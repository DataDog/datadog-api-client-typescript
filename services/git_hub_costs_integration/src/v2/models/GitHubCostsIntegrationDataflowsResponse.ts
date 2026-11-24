import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsCloudCostMetricsIntegrationDataflowResponse } from "./GitHubCostsCloudCostMetricsIntegrationDataflowResponse";

/**
 * Data Datadog collects from GitHub Costs, keyed by dataflow ID.
 */
export class GitHubCostsIntegrationDataflowsResponse {
  /**
   * GitHub costs, including Actions, storage, and Copilot, which you can analyze in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Reported costs are estimates based on list prices and usage data and include discounts when available, but not negotiated rates. Requires Cloud Cost Management on your Datadog organization and a GitHub account on the enhanced billing platform. Without them, this dataflow collects no data. This dataflow is always on and cannot be turned off, so it appears in responses only.
   */
  "githubCloudCostMetrics"?: GitHubCostsCloudCostMetricsIntegrationDataflowResponse;
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
    githubCloudCostMetrics: {
      baseName: "github-cloud-cost-metrics",
      type: "GitHubCostsCloudCostMetricsIntegrationDataflowResponse",
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
    return GitHubCostsIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
