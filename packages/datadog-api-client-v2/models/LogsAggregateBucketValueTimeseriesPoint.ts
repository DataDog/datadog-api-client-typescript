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
 * A timeseries point
 */

export class LogsAggregateBucketValueTimeseriesPoint {
  /**
   * The time value for this point
   */
  "time"?: string;
  /**
   * The value for this point
   */
  "value"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    time: {
      baseName: "time",
      type: "string",
      format: "",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return LogsAggregateBucketValueTimeseriesPoint.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): LogsAggregateBucketValueTimeseriesPoint {
    const res = new LogsAggregateBucketValueTimeseriesPoint();

    res.time = ObjectSerializer.deserialize(data.time, "string", "");

    res.value = ObjectSerializer.deserialize(data.value, "number", "double");

    return res;
  }

  static serialize(data: LogsAggregateBucketValueTimeseriesPoint): {
    [key: string]: any;
  } {
    const attributeTypes =
      LogsAggregateBucketValueTimeseriesPoint.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.time = ObjectSerializer.serialize(data.time, "string", "");

    res.value = ObjectSerializer.serialize(data.value, "number", "double");

    return res;
  }

  public constructor() {}
}
