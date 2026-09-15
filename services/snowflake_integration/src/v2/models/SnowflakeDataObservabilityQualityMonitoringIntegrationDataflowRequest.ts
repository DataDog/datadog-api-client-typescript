import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest";

/**
 * Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.
 */
export class SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Data Observability dataflow. Only the fields provided are changed.
   */
  "settings"?: SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest;
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
      type: "SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
