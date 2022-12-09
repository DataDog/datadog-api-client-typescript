/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageRumSessionsHour } from "./UsageRumSessionsHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of RUM Sessions for each hour for a given organization.
 */
export class UsageRumSessionsResponse {
  /**
   * Get hourly usage for RUM Sessions.
   */
  "usage"?: Array<UsageRumSessionsHour>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageRumSessionsHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageRumSessionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
