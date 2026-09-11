import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings configured on the Databricks integration account.
 */
export class DatabricksIntegrationAccountSettingsResponse {
  /**
   * ID of the SQL warehouse used to query the Databricks system tables.
   */
  "systemTablesSqlWarehouseId"?: string;
  /**
   * URL of the Databricks workspace.
   */
  "workspaceUrl": string;
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
    systemTablesSqlWarehouseId: {
      baseName: "system_tables_sql_warehouse_id",
      type: "string",
    },
    workspaceUrl: {
      baseName: "workspace_url",
      type: "string",
      required: true,
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
    return DatabricksIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
