/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageIoTHour } from "./UsageIoTHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the IoT usage for each hour for a given organization.
 */
export class UsageIoTResponse {
  /**
   * Get hourly usage for IoT.
   */
  "usage"?: Array<UsageIoTHour>;

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
      type: "Array<UsageIoTHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageIoTResponse.attributeTypeMap;
  }

  public constructor() {}
}
