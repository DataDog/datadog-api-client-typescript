import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the logs dataflow. Only the fields provided are changed.
 */
export class NebiusCloudLogsIntegrationDataflowSettingsRequest {
  /**
   * Nebius log integrations to collect. One of `nebius-cloud-compute`, `nebius-cloud-kubernetes`, `nebius-cloud-mlflow`, `nebius-cloud-postgresql`, `nebius-cloud-applications`, or `default` for the streams shared by every service. A non-empty list is the sole source of truth and replaces the stored list: those services are collected and any others stop. An empty list stops log collection entirely. Omit it to keep the stored list.
   */
  "enabledServices"?: Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabledServices: {
      baseName: "enabled_services",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudLogsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
