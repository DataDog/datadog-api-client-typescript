/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryMetricsSeriesMetadata } from "./SLOHistoryMetricsSeriesMetadata";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A representation of `metric` based SLO time series for the provided queries. This is the same response type from `batch_query` endpoint.
 */

export class SLOHistoryMetricsSeries {
  /**
   * Count of submitted metrics.
   */
  "count": number;
  "metadata": SLOHistoryMetricsSeriesMetadata;
  /**
   * Total sum of the query.
   */
  "sum": number;
  /**
   * The query values for each metric.
   */
  "values": Array<number>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    metadata: {
      baseName: "metadata",
      type: "SLOHistoryMetricsSeriesMetadata",
      format: "",
    },
    sum: {
      baseName: "sum",
      type: "number",
      format: "double",
    },
    values: {
      baseName: "values",
      type: "Array<number>",
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return SLOHistoryMetricsSeries.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SLOHistoryMetricsSeries {
    const res = new SLOHistoryMetricsSeries();

    if (data.count === undefined) {
      throw new TypeError(
        "missing required attribute 'count' on 'SLOHistoryMetricsSeries' object"
      );
    }
    res.count = ObjectSerializer.deserialize(data.count, "number", "int64");

    if (data.metadata === undefined) {
      throw new TypeError(
        "missing required attribute 'metadata' on 'SLOHistoryMetricsSeries' object"
      );
    }
    res.metadata = ObjectSerializer.deserialize(
      data.metadata,
      "SLOHistoryMetricsSeriesMetadata",
      ""
    );

    if (data.sum === undefined) {
      throw new TypeError(
        "missing required attribute 'sum' on 'SLOHistoryMetricsSeries' object"
      );
    }
    res.sum = ObjectSerializer.deserialize(data.sum, "number", "double");

    if (data.values === undefined) {
      throw new TypeError(
        "missing required attribute 'values' on 'SLOHistoryMetricsSeries' object"
      );
    }
    res.values = ObjectSerializer.deserialize(
      data.values,
      "Array<number>",
      "double"
    );

    return res;
  }

  static serialize(data: SLOHistoryMetricsSeries): { [key: string]: any } {
    const attributeTypes = SLOHistoryMetricsSeries.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.count === undefined) {
      throw new TypeError(
        "missing required attribute 'count' on 'SLOHistoryMetricsSeries' object"
      );
    }
    res.count = ObjectSerializer.serialize(data.count, "number", "int64");

    if (data.metadata === undefined) {
      throw new TypeError(
        "missing required attribute 'metadata' on 'SLOHistoryMetricsSeries' object"
      );
    }
    res.metadata = ObjectSerializer.serialize(
      data.metadata,
      "SLOHistoryMetricsSeriesMetadata",
      ""
    );

    if (data.sum === undefined) {
      throw new TypeError(
        "missing required attribute 'sum' on 'SLOHistoryMetricsSeries' object"
      );
    }
    res.sum = ObjectSerializer.serialize(data.sum, "number", "double");

    if (data.values === undefined) {
      throw new TypeError(
        "missing required attribute 'values' on 'SLOHistoryMetricsSeries' object"
      );
    }
    res.values = ObjectSerializer.serialize(
      data.values,
      "Array<number>",
      "double"
    );

    return res;
  }

  public constructor() {}
}
