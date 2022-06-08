/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricIntakeType } from "./MetricIntakeType";
import { MetricMetadata } from "./MetricMetadata";
import { MetricPoint } from "./MetricPoint";
import { MetricResource } from "./MetricResource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A metric to submit to Datadog.
 * See [Datadog metrics](https://docs.datadoghq.com/developers/metrics/#custom-metrics-properties).
 */
export class MetricSeries {
  /**
   * If the type of the metric is rate or count, define the corresponding interval.
   */
  "interval"?: number;
  /**
   * Metadata for the metric.
   */
  "metadata"?: MetricMetadata;
  /**
   * The name of the timeseries.
   */
  "metric": string;
  /**
   * Points relating to a metric. All points must be objects with timestamp and a scalar value (cannot be a string). Timestamps should be in POSIX time in seconds, and cannot be more than ten minutes in the future or more than one hour in the past.
   */
  "points": Array<MetricPoint>;
  /**
   * A list of resources to associate with this metric.
   */
  "resources"?: Array<MetricResource>;
  /**
   * The source type name.
   */
  "sourceTypeName"?: string;
  /**
   * A list of tags associated with the metric.
   */
  "tags"?: Array<string>;
  /**
   * The type of metric.
   */
  "type"?: MetricIntakeType;
  /**
   * The unit of point value.
   */
  "unit"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    metadata: {
      baseName: "metadata",
      type: "MetricMetadata",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    points: {
      baseName: "points",
      type: "Array<MetricPoint>",
      required: true,
    },
    resources: {
      baseName: "resources",
      type: "Array<MetricResource>",
    },
    sourceTypeName: {
      baseName: "source_type_name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "MetricIntakeType",
      format: "int32",
    },
    unit: {
      baseName: "unit",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricSeries.attributeTypeMap;
  }

  public constructor() {}
}
