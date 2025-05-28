/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOTimeSliceComparator } from "./SLOTimeSliceComparator";
import { SLOTimeSliceInterval } from "./SLOTimeSliceInterval";
import { SLOTimeSliceQuery } from "./SLOTimeSliceQuery";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The time-slice condition, composed of 3 parts: 1. the metric timeseries query, 2. the comparator,
 * and 3. the threshold. Optionally, a fourth part, the query interval, can be provided.
*/
export class SLOTimeSliceCondition {
  /**
   * The comparator used to compare the SLI value to the threshold.
  */
  "comparator": SLOTimeSliceComparator;
  /**
   * The queries and formula used to calculate the SLI value.
  */
  "query": SLOTimeSliceQuery;
  /**
   * The interval used when querying data, which defines the size of a time slice.
   * Two values are allowed: 60 (1 minute) and 300 (5 minutes).
   * If not provided, the value defaults to 300 (5 minutes).
  */
  "queryIntervalSeconds"?: SLOTimeSliceInterval;
  /**
   * The threshold value to which each SLI value will be compared.
  */
  "threshold": number;

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
    "comparator": {
      "baseName": "comparator",
      "type": "SLOTimeSliceComparator",
      "required": true,
    },
    "query": {
      "baseName": "query",
      "type": "SLOTimeSliceQuery",
      "required": true,
    },
    "queryIntervalSeconds": {
      "baseName": "query_interval_seconds",
      "type": "SLOTimeSliceInterval",
      "format": "int32",
    },
    "threshold": {
      "baseName": "threshold",
      "type": "number",
      "required": true,
      "format": "double",
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




    return SLOTimeSliceCondition.attributeTypeMap;

  }

  public constructor() {











  }
}









