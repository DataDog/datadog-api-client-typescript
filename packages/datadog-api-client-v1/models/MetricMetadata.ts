/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object with all metric related metadata.
 */

export class MetricMetadata {
  /**
   * Metric description.
   */
  "description"?: string;
  /**
   * Name of the integration that sent the metric if applicable.
   */
  "integration"?: string;
  /**
   * Per unit of the metric such as `second` in `bytes per second`.
   */
  "perUnit"?: string;
  /**
   * A more human-readable and abbreviated version of the metric name.
   */
  "shortName"?: string;
  /**
   * StatsD flush interval of the metric in seconds if applicable.
   */
  "statsdInterval"?: number;
  /**
   * Metric type such as `gauge` or `rate`.
   */
  "type"?: string;
  /**
   * Primary unit of the metric such as `byte` or `operation`.
   */
  "unit"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    integration: {
      baseName: "integration",
      type: "string",
    },
    perUnit: {
      baseName: "per_unit",
      type: "string",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
    },
    statsdInterval: {
      baseName: "statsd_interval",
      type: "number",

      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    unit: {
      baseName: "unit",
      type: "string",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricMetadata.attributeTypeMap;
  }

  public constructor() {}
}
