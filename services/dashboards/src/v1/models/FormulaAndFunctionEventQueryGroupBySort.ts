import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventAggregation } from "./FormulaAndFunctionEventAggregation";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Options for sorting group by results.
 */
export class FormulaAndFunctionEventQueryGroupBySort {
  /**
   * Aggregation methods for event platform queries.
   */
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * Metric used for sorting group by results.
   */
  "metric"?: string;
  /**
   * Direction of sort.
   */
  "order"?: QuerySortOrder;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
