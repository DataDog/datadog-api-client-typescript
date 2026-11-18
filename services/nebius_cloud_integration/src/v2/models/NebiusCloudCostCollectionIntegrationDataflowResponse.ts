import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudCostCollectionIntegrationDataflowSettingsResponse } from "./NebiusCloudCostCollectionIntegrationDataflowSettingsResponse";

/**
 * Cloud cost data read from a Nebius Object Storage bucket export and used by [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Requires a bucket holding your cost export and a Nebius access key pair that can read it; without both this dataflow collects no data.
 */
export class NebiusCloudCostCollectionIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Absent when the dataflow has never been configured.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Cloud Cost Management dataflow.
   */
  "settings"?: NebiusCloudCostCollectionIntegrationDataflowSettingsResponse;
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
      type: "NebiusCloudCostCollectionIntegrationDataflowSettingsResponse",
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
    return NebiusCloudCostCollectionIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
