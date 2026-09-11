import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the organization usage metrics dataflow. Only the fields provided are changed.
 */
export class SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest {
  /**
   * Period each metric aggregates over. Set to `true` to aggregate the past 24 hours on a rolling basis, or `false` to aggregate the current day so far. Defaults to `false`.
   */
  "organizationUsageMetricsAggregateLast24h"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    organizationUsageMetricsAggregateLast24h: {
      baseName: "organization_usage_metrics_aggregate_last_24h",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
