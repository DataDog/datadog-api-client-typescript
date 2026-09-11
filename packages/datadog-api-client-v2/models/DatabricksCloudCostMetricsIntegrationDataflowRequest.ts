/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest } from "./DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cost data collected from your Databricks system tables. [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) must be enabled for your organization while this dataflow is on; any request that leaves it enabled without that is rejected with a `422` response.
 */
export class DatabricksCloudCostMetricsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Cloud Cost Management dataflow. Only the fields provided are changed.
   */
  "settings"?: DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest;

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
      type: "DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest",
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
    return DatabricksCloudCostMetricsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
