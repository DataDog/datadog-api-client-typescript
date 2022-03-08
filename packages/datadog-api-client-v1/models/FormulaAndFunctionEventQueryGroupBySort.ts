/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionEventAggregation } from "./FormulaAndFunctionEventAggregation";
import { QuerySortOrder } from "./QuerySortOrder";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Options for sorting group by results.
 */

export class FormulaAndFunctionEventQueryGroupBySort {
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * Metric used for sorting group by results.
   */
  "metric"?: string;
  "order"?: QuerySortOrder;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "FormulaAndFunctionEventAggregation",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionEventQueryGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
