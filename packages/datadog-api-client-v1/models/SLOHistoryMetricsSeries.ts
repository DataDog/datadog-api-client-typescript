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
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * A representation of `metric` based SLO time series for the provided queries. This is the same response type from `batch_query` endpoint.
 */

export class SLOHistoryMetricsSeries {
  /**
   * Count of submitted metrics.
   */
  "count": number;
  "metadata"?: SLOHistoryMetricsSeriesMetadata;
  /**
   * Total sum of the query.
   */
  "sum": number;
  /**
   * The query values for each metric.
   */
  "values": Array<number>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    metadata: {
      baseName: "metadata",
      type: "SLOHistoryMetricsSeriesMetadata",
    },
    sum: {
      baseName: "sum",
      type: "number",
      required: true,
      format: "double",
    },
    values: {
      baseName: "values",
      type: "Array<number>",
      required: true,
      format: "double",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOHistoryMetricsSeries.attributeTypeMap;
  }

  public constructor() {}
}
