import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse } from "./DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse";

/**
 * Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization.
 */
export class DatabricksCloudCostMetricsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Set to `false` to stop collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Cloud Cost Management dataflow.
   */
  "settings"?: DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse",
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
    return DatabricksCloudCostMetricsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
