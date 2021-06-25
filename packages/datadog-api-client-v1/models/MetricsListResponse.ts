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
 * Object listing all metric names stored by Datadog since a given time.
 */

export class MetricsListResponse {
  /**
   * Time when the metrics were active, seconds since the Unix epoch.
   */
  "from"?: string;
  /**
   * List of metric names.
   */
  "metrics"?: Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    from: {
      baseName: "from",
      type: "string",
      format: "",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricsListResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MetricsListResponse {
    const res = new MetricsListResponse();

    res.from = ObjectSerializer.deserialize(data.from, "string", "");

    res.metrics = ObjectSerializer.deserialize(
      data.metrics,
      "Array<string>",
      ""
    );

    return res;
  }

  static serialize(data: MetricsListResponse): { [key: string]: any } {
    const attributeTypes = MetricsListResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.from = ObjectSerializer.serialize(data.from, "string", "");

    res.metrics = ObjectSerializer.serialize(data.metrics, "Array<string>", "");

    return res;
  }

  public constructor() {}
}
