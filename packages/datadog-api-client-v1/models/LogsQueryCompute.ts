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
 * Define computation for a log query.
 */

export class LogsQueryCompute {
  /**
   * The aggregation method.
   */
  "aggregation": string;
  /**
   * Facet name.
   */
  "facet"?: string;
  /**
   * Define a time interval in seconds.
   */
  "interval"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    aggregation: {
      baseName: "aggregation",
      type: "string",
      format: "",
    },
    facet: {
      baseName: "facet",
      type: "string",
      format: "",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return LogsQueryCompute.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsQueryCompute {
    const res = new LogsQueryCompute();

    if (data.aggregation === undefined) {
      throw new TypeError(
        "missing required attribute 'aggregation' on 'LogsQueryCompute' object"
      );
    }
    res.aggregation = ObjectSerializer.deserialize(
      data.aggregation,
      "string",
      ""
    );

    res.facet = ObjectSerializer.deserialize(data.facet, "string", "");

    res.interval = ObjectSerializer.deserialize(
      data.interval,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: LogsQueryCompute): { [key: string]: any } {
    const attributeTypes = LogsQueryCompute.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.aggregation === undefined) {
      throw new TypeError(
        "missing required attribute 'aggregation' on 'LogsQueryCompute' object"
      );
    }
    res.aggregation = ObjectSerializer.serialize(
      data.aggregation,
      "string",
      ""
    );

    res.facet = ObjectSerializer.serialize(data.facet, "string", "");

    res.interval = ObjectSerializer.serialize(data.interval, "number", "int64");

    return res;
  }

  public constructor() {}
}
