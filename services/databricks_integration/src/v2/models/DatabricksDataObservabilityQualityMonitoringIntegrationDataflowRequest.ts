import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest";

/**
 * Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.
 */
export class DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Data Observability dataflow. Only the fields provided are changed.
   */
  "settings"?: DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest;
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
      type: "DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
