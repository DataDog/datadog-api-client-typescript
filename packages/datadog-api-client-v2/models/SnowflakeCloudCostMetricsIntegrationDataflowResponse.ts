/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization, and the ORGANIZATION_BILLING_VIEWER database role on the Snowflake role.
 */
export class SnowflakeCloudCostMetricsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Cloud Cost Management dataflow.
   */
  "settings"?: SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse;

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
      type: "SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse",
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
    return SnowflakeCloudCostMetricsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
