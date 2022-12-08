/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppAggregateSortType } from "./CIAppAggregateSortType";
import { CIAppAggregationFunction } from "./CIAppAggregationFunction";
import { CIAppSortOrder } from "./CIAppSortOrder";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * A sort rule.
 */
export class CIAppAggregateSort {
  /**
   * An aggregation function.
   */
  "aggregation"?: CIAppAggregationFunction | UnparsedObject;
  /**
   * The metric to sort by (only used for `type=measure`).
   */
  "metric"?: string;
  /**
   * The order to use, ascending or descending.
   */
  "order"?: CIAppSortOrder | UnparsedObject;
  /**
   * The type of sorting algorithm.
   */
  "type"?: CIAppAggregateSortType | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "CIAppAggregationFunction",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "CIAppSortOrder",
    },
    type: {
      baseName: "type",
      type: "CIAppAggregateSortType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppAggregateSort.attributeTypeMap;
  }

  public constructor() {}
}
