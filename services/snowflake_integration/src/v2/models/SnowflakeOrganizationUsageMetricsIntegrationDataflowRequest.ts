import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest";

/**
 * Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. Reading that schema requires the ORGADMIN role; without it this dataflow collects no data.
 */
export class SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the organization usage metrics dataflow. Only the fields provided are changed.
   */
  "settings"?: SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest;
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
      type: "SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
