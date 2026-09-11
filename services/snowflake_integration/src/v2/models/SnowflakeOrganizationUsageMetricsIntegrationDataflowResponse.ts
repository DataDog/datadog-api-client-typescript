import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse";

/**
 * Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. Reading that schema requires the ORGADMIN role.
 */
export class SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data.
   */
  "enabled"?: boolean;
  /**
   * Settings of the organization usage metrics dataflow.
   */
  "settings"?: SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse",
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
    return SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
