import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * OpenAI organization costs, which you can analyze in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). See [collected data](https://docs.datadoghq.com/cloud_cost_management/saas_costs/?tab=openai#data-collected) for what is included. Cost data appears in Cloud Cost Management within 24 hours after you enable this dataflow.
 */
export class OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest {
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
    return OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
