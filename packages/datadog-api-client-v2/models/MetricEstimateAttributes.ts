/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricEstimateType } from "./MetricEstimateType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object containing the definition of a metric estimate attribute.
*/
export class MetricEstimateAttributes {
  /**
   * Estimate type based on the queried configuration. By default, `count_or_gauge` is returned. `distribution` is returned for distribution metrics without percentiles enabled. Lastly, `percentile` is returned if `filter[pct]=true` is queried with a distribution metric.
  */
  "estimateType"?: MetricEstimateType;
  /**
   * Timestamp when the cardinality estimate was requested.
  */
  "estimatedAt"?: Date;
  /**
   * Estimated cardinality of the metric based on the queried configuration.
  */
  "estimatedOutputSeries"?: number;

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
    "estimateType": {
      "baseName": "estimate_type",
      "type": "MetricEstimateType",
    },
    "estimatedAt": {
      "baseName": "estimated_at",
      "type": "Date",
      "format": "date-time",
    },
    "estimatedOutputSeries": {
      "baseName": "estimated_output_series",
      "type": "number",
      "format": "int64",
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




    return MetricEstimateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









