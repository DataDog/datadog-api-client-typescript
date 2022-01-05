/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object containing array of IDs of canceled downtimes.
 */

export class CanceledDowntimesIds {
  /**
   * ID of downtimes that were canceled.
   */
  "cancelledIds"?: Array<number>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    cancelledIds: {
      baseName: "cancelled_ids",
      type: "Array<number>",

      format: "int64",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return CanceledDowntimesIds.attributeTypeMap;
  }

  public constructor() {}
}
