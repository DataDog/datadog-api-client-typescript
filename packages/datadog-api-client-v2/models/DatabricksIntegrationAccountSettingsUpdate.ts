/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
