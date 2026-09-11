import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Cloud Cost Management dataflow. Only the fields provided are changed.
 */
export class DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest {
  /**
   * Whether cost data is collected for every workspace in the Databricks account rather than this workspace only. This takes effect across the Databricks account: if any one workspace enables it, Datadog collects cost data for all of them regardless of their individual settings, and every covered workspace incurs Cloud Cost Management charges. Defaults to `true`.
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
