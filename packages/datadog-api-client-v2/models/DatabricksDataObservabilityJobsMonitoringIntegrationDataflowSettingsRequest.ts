/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the Data Jobs Monitoring dataflow. Only the fields provided are changed.
 */
export class DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest {
  /**
   * ID of the Datadog API key the global init script uses to submit data. Setting or changing it requires `dd_api_key_secret` in the same request.
   */
  "ddApiKeyId"?: string;
  /**
   * Secret value of the Datadog API key identified by `dd_api_key_id`.
   */
  "ddApiKeySecret"?: string;
  /**
   * Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script. Installation can take up to 15 minutes and requires Databricks Workspace Admin permissions. The script does not apply to clusters in Standard access mode. Leave this `false` to install the Agent yourself. Defaults to `false`.
   */
  "djmGlobalInitScriptEnabled"?: boolean;
  /**
   * Whether GPU metrics are collected from your Databricks clusters. The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`. Defaults to `false`.
   */
  "scriptGpumEnabled"?: boolean;
  /**
   * Whether driver and worker logs are collected from your Databricks clusters. The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`. Defaults to `false`.
   */
  "scriptLogsEnabled"?: boolean;
  /**
   * Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute. This compute has no clusters for the global init script to target, so collection reads the Databricks system tables and requires `system_tables_sql_warehouse_id`. Defaults to `true`.
   */
  "serverlessJobsEnabled"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddApiKeyId: {
      baseName: "dd_api_key_id",
      type: "string",
    },
    ddApiKeySecret: {
      baseName: "dd_api_key_secret",
      type: "string",
    },
    djmGlobalInitScriptEnabled: {
      baseName: "djm_global_init_script_enabled",
      type: "boolean",
    },
    scriptGpumEnabled: {
      baseName: "script_gpum_enabled",
      type: "boolean",
    },
    scriptLogsEnabled: {
      baseName: "script_logs_enabled",
      type: "boolean",
    },
    serverlessJobsEnabled: {
      baseName: "serverless_jobs_enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
