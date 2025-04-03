import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppAggregateSortType } from "./CIAppAggregateSortType";
import { CIAppAggregationFunction } from "./CIAppAggregationFunction";
import { CIAppSortOrder } from "./CIAppSortOrder";

/**
 * A sort rule. The `aggregation` field is required when `type` is `measure`.
 */
export class CIAppAggregateSort {
  /**
   * An aggregation function.
   */
  "aggregation"?: CIAppAggregationFunction;
  /**
   * The metric to sort by (only used for `type=measure`).
   */
  "metric"?: string;
  /**
   * The order to use, ascending or descending.
   */
  "order"?: CIAppSortOrder;
  /**
   * The type of sorting algorithm.
   */
  "type"?: CIAppAggregateSortType;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
