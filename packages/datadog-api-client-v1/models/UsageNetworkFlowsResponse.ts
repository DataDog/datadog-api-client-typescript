/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageNetworkFlowsHour } from "./UsageNetworkFlowsHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of netflow events indexed for each hour for a given organization.
 */
export class UsageNetworkFlowsResponse {
  /**
   * Get hourly usage for Network Flows.
   */
  "usage"?: Array<UsageNetworkFlowsHour>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageNetworkFlowsHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageNetworkFlowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
