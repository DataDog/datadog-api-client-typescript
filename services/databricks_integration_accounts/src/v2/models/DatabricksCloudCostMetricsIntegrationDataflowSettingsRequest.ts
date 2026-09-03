import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Databricks cloud cost metrics dataflow. Only the fields provided are changed.
 */
export class DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest {
  /**
   * Whether cost data is collected for every workspace in the Databricks account rather than this workspace only.
   */
  "ccmCollectAllWorkspaces"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ccmCollectAllWorkspaces: {
      baseName: "ccm_collect_all_workspaces",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
