/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NebiusCloudCostCollectionIntegrationDataflowSettingsResponse } from "./NebiusCloudCostCollectionIntegrationDataflowSettingsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
