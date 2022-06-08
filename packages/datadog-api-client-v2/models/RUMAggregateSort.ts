/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMAggregateSortType } from "./RUMAggregateSortType";
import { RUMAggregationFunction } from "./RUMAggregationFunction";
import { RUMSortOrder } from "./RUMSortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A sort rule.
 */
export class RUMAggregateSort {
  /**
   * An aggregation function.
   */
  "aggregation"?: RUMAggregationFunction;
  /**
   * The metric to sort by (only used for `type=measure`).
   */
  "metric"?: string;
  /**
   * The order to use, ascending or descending.
   */
  "order"?: RUMSortOrder;
  /**
   * The type of sorting algorithm.
   */
  "type"?: RUMAggregateSortType;

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
      type: "RUMAggregationFunction",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "RUMSortOrder",
    },
    type: {
      baseName: "type",
      type: "RUMAggregateSortType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMAggregateSort.attributeTypeMap;
  }

  public constructor() {}
}
