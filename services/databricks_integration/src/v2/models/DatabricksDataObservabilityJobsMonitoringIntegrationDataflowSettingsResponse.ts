import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Data Jobs Monitoring dataflow.
 */
export class DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse {
  /**
   * ID of the Datadog API key the global init script uses to submit data.
   */
  "ddApiKeyId"?: string;
  /**
   * Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script. The script does not apply to clusters in Standard access mode. When `false`, the Agent is installed manually.
   */
  "djmGlobalInitScriptEnabled"?: boolean;
  /**
   * Whether GPU metrics are collected from your Databricks clusters. The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.
   */
  "scriptGpumEnabled"?: boolean;
  /**
   * Whether driver and worker logs are collected from your Databricks clusters. The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.
   */
  "scriptLogsEnabled"?: boolean;
  /**
   * Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute. This compute has no clusters for the global init script to target, so collection reads the Databricks system tables and requires `system_tables_sql_warehouse_id`.
   */
  "serverlessJobsEnabled"?: boolean;
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
    ddApiKeyId: {
      baseName: "dd_api_key_id",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
