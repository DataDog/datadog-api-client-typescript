import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Costs of the OpenAI project that the key in `authentication` belongs to, which you can analyze in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Cost data appears in Cloud Cost Management within 24 hours after you enable this dataflow.
 */
export class OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest {
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
    return OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
