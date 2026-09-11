/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) must be enabled for your organization while this dataflow is enabled. Any request that enables this dataflow without Cloud Cost Management is rejected with a `422` response. The Snowflake role also needs the ORGANIZATION_BILLING_VIEWER database role to read the underlying cost views.
 */
export class SnowflakeCloudCostMetricsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Cloud Cost Management dataflow. Only the fields provided are changed.
   */
  "settings"?: SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest;

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
      type: "SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest",
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
    return SnowflakeCloudCostMetricsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
