/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesResponseSeries } from "./TimeseriesResponseSeries";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a timeseries response.
 */
export class TimeseriesResponseAttributes {
  /**
   * Array of response series. The index here corresponds to the index in the `formulas` or `queries` array from the request.
   */
  "series"?: Array<TimeseriesResponseSeries>;
  /**
   * Array of times, 1-1 match with individual values arrays.
   */
  "times"?: Array<number>;
  /**
   * Array of value-arrays. The index here corresponds to the index in the `formulas` or `queries` array from the request.
   */
  "values"?: Array<Array<number | null>>;

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
    series: {
      baseName: "series",
      type: "Array<TimeseriesResponseSeries>",
    },
    times: {
      baseName: "times",
      type: "Array<number>",
      format: "int64",
    },
    values: {
      baseName: "values",
      type: "Array<Array<number>>",
      format: "double",
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
    return TimeseriesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
