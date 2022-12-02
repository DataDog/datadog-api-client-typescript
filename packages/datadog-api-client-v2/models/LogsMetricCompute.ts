/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricComputeAggregationType } from "./LogsMetricComputeAggregationType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The compute rule to compute the log-based metric.
 */
export class LogsMetricCompute {
  /**
   * The type of aggregation to use.
   */
  "aggregationType": LogsMetricComputeAggregationType;
  /**
   * Toggle to include or exclude percentile aggregations for distribution metrics.
   * Only present when the `aggregation_type` is `distribution`.
   */
  "includePercentiles"?: boolean;
  /**
   * The path to the value the log-based metric will aggregate on (only used if the aggregation type is a "distribution").
   */
  "path"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregationType: {
      baseName: "aggregation_type",
      type: "LogsMetricComputeAggregationType",
      required: true,
    },
    includePercentiles: {
      baseName: "include_percentiles",
      type: "boolean",
    },
    path: {
      baseName: "path",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricCompute.attributeTypeMap;
  }

  public constructor() {}
}
