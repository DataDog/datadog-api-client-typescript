/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings for creating the Databricks integration account.
 */
export class DatabricksIntegrationAccountSettingsRequest {
  /**
   * ID of the SQL warehouse used to query the Databricks system tables. Find it at the end of the HTTP Path under Warehouses > Connection Details in the Databricks console. Required when the cloud cost metrics or the Data Observability dataflow is enabled, or when `serverless_jobs_enabled` is on; since serverless jobs are on unless explicitly disabled, omitting this field otherwise causes the request to be rejected with a `422` response.
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
