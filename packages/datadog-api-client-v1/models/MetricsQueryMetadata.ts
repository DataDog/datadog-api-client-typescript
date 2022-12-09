/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsQueryUnit } from "./MetricsQueryUnit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing all metric names returned and their associated metadata.
 */
export class MetricsQueryMetadata {
  /**
   * Aggregation type.
   */
  "aggr"?: string;
  /**
   * Display name of the metric.
   */
  "displayName"?: string;
  /**
   * End of the time window, milliseconds since Unix epoch.
   */
  "end"?: number;
  /**
   * Metric expression.
   */
  "expression"?: string;
  /**
   * Number of seconds between data samples.
   */
  "interval"?: number;
  /**
   * Number of data samples.
   */
  "length"?: number;
  /**
   * Metric name.
   */
  "metric"?: string;
  /**
   * List of points of the time series.
   */
  "pointlist"?: Array<[number, number]>;
  /**
   * The index of the series' query within the request.
   */
  "queryIndex"?: number;
  /**
   * Metric scope, comma separated list of tags.
   */
  "scope"?: string;
  /**
   * Start of the time window, milliseconds since Unix epoch.
   */
  "start"?: number;
  /**
   * Unique tags identifying this series.
   */
  "tagSet"?: Array<string>;
  /**
   * Detailed information about the metric unit.
   * First element describes the "primary unit" (for example, `bytes` in `bytes per second`),
   * second describes the "per unit" (for example, `second` in `bytes per second`).
   */
  "unit"?: [MetricsQueryUnit, MetricsQueryUnit];

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggr: {
      baseName: "aggr",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    expression: {
      baseName: "expression",
      type: "string",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    length: {
      baseName: "length",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    pointlist: {
      baseName: "pointlist",
      type: "Array<[number, number]>",
      format: "double",
    },
    queryIndex: {
      baseName: "query_index",
      type: "number",
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
    },
    tagSet: {
      baseName: "tag_set",
      type: "Array<string>",
    },
    unit: {
      baseName: "unit",
      type: "[MetricsQueryUnit, MetricsQueryUnit]",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricsQueryMetadata.attributeTypeMap;
  }

  public constructor() {}
}
