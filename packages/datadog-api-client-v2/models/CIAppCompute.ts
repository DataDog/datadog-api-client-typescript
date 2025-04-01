/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppAggregationFunction } from "./CIAppAggregationFunction";
import { CIAppComputeType } from "./CIAppComputeType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A compute rule to compute metrics or timeseries.
*/
export class CIAppCompute {
  /**
   * An aggregation function.
  */
  "aggregation": CIAppAggregationFunction;
  /**
   * The time buckets' size (only used for type=timeseries)
   * Defaults to a resolution of 150 points.
  */
  "interval"?: string;
  /**
   * The metric to use.
  */
  "metric"?: string;
  /**
   * The type of compute.
  */
  "type"?: CIAppComputeType;

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
    "aggregation": {
      "baseName": "aggregation",
      "type": "CIAppAggregationFunction",
      "required": true,
    },
    "interval": {
      "baseName": "interval",
      "type": "string",
    },
    "metric": {
      "baseName": "metric",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "CIAppComputeType",
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




    return CIAppCompute.attributeTypeMap;

  }

  public constructor() {











  }
}









