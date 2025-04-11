import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricIntakeType } from "./MetricIntakeType";
import { MetricMetadata } from "./MetricMetadata";
import { MetricPoint } from "./MetricPoint";
import { MetricResource } from "./MetricResource";

/**
 * A metric to submit to Datadog.
 * See [Datadog metrics](https://docs.datadoghq.com/developers/metrics/#custom-metrics-properties).
 */
export class MetricSeries {
  /**
   * If the type of the metric is rate or count, define the corresponding interval in seconds.
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
   * The type of metric. The available types are `0` (unspecified), `1` (count), `2` (rate), and `3` (gauge).
   */
  "type"?: MetricIntakeType;
  /**
   * The unit of point value.
   */
  "unit"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
