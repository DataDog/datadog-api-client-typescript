/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the Databricks cloud cost metrics dataflow. Only the fields provided are changed.
 */
export class DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest {
  /**
   * Whether cost data is collected for every workspace in the Databricks account rather than this workspace only.
   */
  "ccmCollectAllWorkspaces"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ccmCollectAllWorkspaces: {
      baseName: "ccm_collect_all_workspaces",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
