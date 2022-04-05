/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageIoTHour } from "./UsageIoTHour";
import { AttributeTypeMap } from "../util";

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
