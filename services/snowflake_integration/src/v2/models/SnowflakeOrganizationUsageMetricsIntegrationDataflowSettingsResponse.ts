import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the organization usage metrics dataflow.
 */
export class SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse {
  /**
   * Period each metric aggregates over. When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.
   */
  "organizationUsageMetricsAggregateLast24h"?: boolean;
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
    organizationUsageMetricsAggregateLast24h: {
      baseName: "organization_usage_metrics_aggregate_last_24h",
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
    return SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
