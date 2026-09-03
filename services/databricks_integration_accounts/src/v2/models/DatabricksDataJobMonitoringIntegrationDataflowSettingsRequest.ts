import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Databricks Data Jobs Monitoring dataflow. Only the fields provided are changed.
 */
export class DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest {
  /**
   * ID of the Datadog API key the global init script uses to submit data. Setting or changing it requires `dd_api_key_secret` in the same request.
   */
  "ddApiKeyId"?: string;
  /**
   * Secret value of the Datadog API key identified by `dd_api_key_id`.
   */
  "ddApiKeySecret"?: string;
  /**
   * Whether Datadog manages the global init script that installs the Agent on your Databricks clusters.
   */
  "djmGlobalInitScriptEnabled"?: boolean;
  /**
   * Whether GPU metrics are collected from your Databricks clusters. The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.
   */
  "scriptGpumEnabled"?: boolean;
  /**
   * Whether logs are collected from your Databricks clusters. The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.
   */
  "scriptLogsEnabled"?: boolean;
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
