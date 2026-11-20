import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest } from "./OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest";

/**
 * Data Datadog collects from OpenAI Usage and Costs, keyed by dataflow ID. Datadog always collects organization usage metrics. Each dataflow in this object adds another type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values.
 */
export class OpenAIUsageAndCostsIntegrationDataflowsRequest {
  /**
   * OpenAI organization costs, which you can analyze in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). See [collected data](https://docs.datadoghq.com/cloud_cost_management/saas_costs/?tab=openai#data-collected) for what is included. Cost data appears in Cloud Cost Management within 24 hours after you enable this dataflow.
   */
  "openaiCloudCostData"?: OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest;
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
      type: "OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAIUsageAndCostsIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
