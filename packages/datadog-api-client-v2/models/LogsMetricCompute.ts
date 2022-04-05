/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricComputeAggregationType } from "./LogsMetricComputeAggregationType";
import { AttributeTypeMap } from "../util";

/**
 * The compute rule to compute the log-based metric.
 */

export class LogsMetricCompute {
  "aggregationType": LogsMetricComputeAggregationType;
  /**
   * The path to the value the log-based metric will aggregate on (only used if the aggregation type is a \"distribution\").
   */
  "path"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregationType: {
      baseName: "aggregation_type",
      type: "LogsMetricComputeAggregationType",
      required: true,
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
