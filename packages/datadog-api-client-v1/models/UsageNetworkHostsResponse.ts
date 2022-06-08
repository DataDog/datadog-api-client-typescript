/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageNetworkHostsHour } from "./UsageNetworkHostsHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of active NPM hosts for each hour for a given organization.
 */
export class UsageNetworkHostsResponse {
  /**
   * Get hourly usage for NPM hosts.
   */
  "usage"?: Array<UsageNetworkHostsHour>;

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
      type: "Array<UsageNetworkHostsHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageNetworkHostsResponse.attributeTypeMap;
  }

  public constructor() {}
}
