import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for updating the Databricks integration account. Only the fields provided are changed.
 */
export class DatabricksIntegrationAccountSettingsUpdate {
  /**
   * ID of the SQL warehouse used to query the Databricks system tables.
   */
  "systemTablesSqlWarehouseId"?: string;
  /**
   * URL of the Databricks workspace.
   */
  "workspaceUrl"?: string;
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
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
