/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageMetricCategory } from "./UsageMetricCategory";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Number of hourly recorded custom metrics for a given organization.
*/
export class UsageTopAvgMetricsHour {
  /**
   * Average number of timeseries per hour in which the metric occurs.
  */
  "avgMetricHour"?: number;
  /**
   * Maximum number of timeseries per hour in which the metric occurs.
  */
  "maxMetricHour"?: number;
  /**
   * Contains the metric category.
  */
  "metricCategory"?: UsageMetricCategory;
  /**
   * Contains the custom metric name.
  */
  "metricName"?: string;

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
    "avgMetricHour": {
      "baseName": "avg_metric_hour",
      "type": "number",
      "format": "int64",
    },
    "maxMetricHour": {
      "baseName": "max_metric_hour",
      "type": "number",
      "format": "int64",
    },
    "metricCategory": {
      "baseName": "metric_category",
      "type": "UsageMetricCategory",
    },
    "metricName": {
      "baseName": "metric_name",
      "type": "string",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return UsageTopAvgMetricsHour.attributeTypeMap;

  }

  public constructor() {











  }
}









