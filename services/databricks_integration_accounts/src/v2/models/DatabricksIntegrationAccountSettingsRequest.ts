import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for creating the Databricks integration account.
 */
export class DatabricksIntegrationAccountSettingsRequest {
  /**
   * ID of the SQL warehouse used to query the Databricks system tables.
   */
  "systemTablesSqlWarehouseId"?: string;
  /**
   * URL of the Databricks workspace.
   */
  "workspaceUrl": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    systemTablesSqlWarehouseId: {
      baseName: "system_tables_sql_warehouse_id",
      type: "string",
    },
    workspaceUrl: {
      baseName: "workspace_url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
