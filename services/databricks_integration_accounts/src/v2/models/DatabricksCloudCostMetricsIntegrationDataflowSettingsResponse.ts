import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Databricks cloud cost metrics dataflow.
 */
export class DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse {
  /**
   * Whether cost data is collected for every workspace in the Databricks account rather than this workspace only.
   */
  "ccmCollectAllWorkspaces"?: boolean;
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
    ccmCollectAllWorkspaces: {
      baseName: "ccm_collect_all_workspaces",
      type: "boolean",
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
    return DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
