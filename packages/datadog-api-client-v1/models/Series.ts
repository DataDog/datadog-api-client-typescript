/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A metric to submit to Datadog.
 * See [Datadog metrics](https://docs.datadoghq.com/developers/metrics/#custom-metrics-properties).
 */
export class Series {
  /**
   * The name of the host that produced the metric.
   */
  "host"?: string;
  /**
   * If the type of the metric is rate or count, define the corresponding interval in seconds.
   */
  "interval"?: number;
  /**
   * The name of the timeseries.
   */
  "metric": string;
  /**
   * Points relating to a metric. All points must be tuples with timestamp and a scalar value (cannot be a string). Timestamps should be in POSIX time in seconds, and cannot be more than ten minutes in the future or more than one hour in the past.
   */
  "points": Array<[number, number]>;
  /**
   * A list of tags associated with the metric.
   */
  "tags"?: Array<string>;
  /**
   * The type of the metric. Valid types are "",`count`, `gauge`, and `rate`.
   */
  "type"?: string;

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
    host: {
      baseName: "host",
      type: "string",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    points: {
      baseName: "points",
      type: "Array<[number, number]>",
      required: true,
      format: "double",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Series.attributeTypeMap;
  }

  public constructor() {}
}
