import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Databricks Data Jobs Monitoring dataflow.
 */
export class DatabricksDataJobMonitoringIntegrationDataflowSettingsResponse {
  /**
   * ID of the Datadog API key the global init script uses to submit data.
   */
  "ddApiKeyId"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksDataJobMonitoringIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
