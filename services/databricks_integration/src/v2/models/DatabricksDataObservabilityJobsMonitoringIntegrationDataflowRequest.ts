import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest";

/**
 * Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.
 */
export class DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `true`; set to `false` to stop collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Data Jobs Monitoring dataflow. Only the fields provided are changed.
   */
  "settings"?: DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
