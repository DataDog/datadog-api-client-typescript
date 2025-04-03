import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansAggregateSortType } from "./SpansAggregateSortType";
import { SpansAggregationFunction } from "./SpansAggregationFunction";
import { SpansSortOrder } from "./SpansSortOrder";

/**
 * A sort rule.
 */
export class SpansAggregateSort {
  /**
   * An aggregation function.
   */
  "aggregation"?: SpansAggregationFunction;
  /**
   * The metric to sort by (only used for `type=measure`).
   */
  "metric"?: string;
  /**
   * The order to use, ascending or descending.
   */
  "order"?: SpansSortOrder;
  /**
   * The type of sorting algorithm.
   */
  "type"?: SpansAggregateSortType;
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
      type: "SpansAggregationFunction",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "SpansSortOrder",
    },
    type: {
      baseName: "type",
      type: "SpansAggregateSortType",
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
    return SpansAggregateSort.attributeTypeMap;
  }

  public constructor() {}
}
