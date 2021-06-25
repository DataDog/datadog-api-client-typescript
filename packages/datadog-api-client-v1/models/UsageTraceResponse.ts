/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageTraceHour } from "./UsageTraceHour";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A response containing trace usage.
 */

export class UsageTraceResponse {
  /**
   * Array with the number of hourly traces indexed for a given organization.
   */
  "usage"?: Array<UsageTraceHour>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    usage: {
      baseName: "usage",
      type: "Array<UsageTraceHour>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageTraceResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageTraceResponse {
    const res = new UsageTraceResponse();

    res.usage = ObjectSerializer.deserialize(
      data.usage,
      "Array<UsageTraceHour>",
      ""
    );

    return res;
  }

  static serialize(data: UsageTraceResponse): { [key: string]: any } {
    const attributeTypes = UsageTraceResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.usage = ObjectSerializer.serialize(
      data.usage,
      "Array<UsageTraceHour>",
      ""
    );

    return res;
  }

  public constructor() {}
}
