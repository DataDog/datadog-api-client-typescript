import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudCostCollectionIntegrationDataflowSettingsRequest } from "./NebiusCloudCostCollectionIntegrationDataflowSettingsRequest";

/**
 * Cloud cost data read from a Nebius Object Storage bucket export and used by [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Enabling it requires a bucket holding your cost export and a Nebius access key pair that can read it; a request that enables this dataflow without them is rejected with a `422` response.
 */
export class NebiusCloudCostCollectionIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Cloud Cost Management dataflow. Only the fields provided are changed.
   */
  "settings"?: NebiusCloudCostCollectionIntegrationDataflowSettingsRequest;
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
      type: "NebiusCloudCostCollectionIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudCostCollectionIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
