/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object containing array of IDs of canceled downtimes.
 */

export class CanceledDowntimesIds {
  /**
   * ID of downtimes that were canceled.
   */
  "cancelledIds"?: Array<number>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    cancelledIds: {
      baseName: "cancelled_ids",
      type: "Array<number>",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return CanceledDowntimesIds.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): CanceledDowntimesIds {
    const res = new CanceledDowntimesIds();

    res.cancelledIds = ObjectSerializer.deserialize(
      data.cancelled_ids,
      "Array<number>",
      "int64"
    );

    return res;
  }

  static serialize(data: CanceledDowntimesIds): { [key: string]: any } {
    const attributeTypes = CanceledDowntimesIds.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.cancelled_ids = ObjectSerializer.serialize(
      data.cancelledIds,
      "Array<number>",
      "int64"
    );

    return res;
  }

  public constructor() {}
}
