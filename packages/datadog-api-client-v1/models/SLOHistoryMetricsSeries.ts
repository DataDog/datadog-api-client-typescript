/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOHistoryMetricsSeriesMetadata } from "./SLOHistoryMetricsSeriesMetadata";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * A representation of `metric` based SLO time series for the provided queries.
 * This is the same response type from `batch_query` endpoint.
 */
export class SLOHistoryMetricsSeries {
  /**
   * Count of submitted metrics.
   */
  "count": number;
  /**
   * Query metadata.
   */
  "metadata"?: SLOHistoryMetricsSeriesMetadata;
  /**
   * Total sum of the query.
   */
  "sum": number;
  /**
   * The query values for each metric.
   */
  "values": Array<number>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOHistoryMetricsSeries.attributeTypeMap;
  }

  public constructor() {}
}
