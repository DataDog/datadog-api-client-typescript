/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageTimeseriesHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of custom metrics that are inputs for aggregations (metric configured is custom).
   */
  "numCustomInputTimeseries"?: number;
  /**
   * Contains the number of custom metrics that are outputs for aggregations (metric configured is custom).
   */
  "numCustomOutputTimeseries"?: number;
  /**
   * Contains sum of non-aggregation custom metrics and custom metrics that are outputs for aggregations.
   */
  "numCustomTimeseries"?: number;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    hour: {
      baseName: "hour",
      type: "Date",

      format: "date-time",
    },
    numCustomInputTimeseries: {
      baseName: "num_custom_input_timeseries",
      type: "number",

      format: "int64",
    },
    numCustomOutputTimeseries: {
      baseName: "num_custom_output_timeseries",
      type: "number",

      format: "int64",
    },
    numCustomTimeseries: {
      baseName: "num_custom_timeseries",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageTimeseriesHour.attributeTypeMap;
  }

  public constructor() {}
}
