import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMAggregateSortType } from "./RUMAggregateSortType";
import { RUMAggregationFunction } from "./RUMAggregationFunction";
import { RUMSortOrder } from "./RUMSortOrder";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
