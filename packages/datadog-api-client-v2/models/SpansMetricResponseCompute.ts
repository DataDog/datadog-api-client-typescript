/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansMetricComputeAggregationType } from "./SpansMetricComputeAggregationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The compute rule to compute the span-based metric.
*/
export class SpansMetricResponseCompute {
  /**
   * The type of aggregation to use.
  */
  "aggregationType"?: SpansMetricComputeAggregationType;
  /**
   * Toggle to include or exclude percentile aggregations for distribution metrics.
   * Only present when the `aggregation_type` is `distribution`.
  */
  "includePercentiles"?: boolean;
  /**
   * The path to the value the span-based metric will aggregate on (only used if the aggregation type is a "distribution").
  */
  "path"?: string;

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
    "aggregationType": {
      "baseName": "aggregation_type",
      "type": "SpansMetricComputeAggregationType",
    },
    "includePercentiles": {
      "baseName": "include_percentiles",
      "type": "boolean",
    },
    "path": {
      "baseName": "path",
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




    return SpansMetricResponseCompute.attributeTypeMap;

  }

  public constructor() {











  }
}









