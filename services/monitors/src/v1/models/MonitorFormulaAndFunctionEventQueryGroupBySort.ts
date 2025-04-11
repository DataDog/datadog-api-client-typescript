import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionEventAggregation } from "./MonitorFormulaAndFunctionEventAggregation";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Options for sorting group by results.
 */
export class MonitorFormulaAndFunctionEventQueryGroupBySort {
  /**
   * Aggregation methods for event platform queries.
   */
  "aggregation": MonitorFormulaAndFunctionEventAggregation;
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
      type: "MonitorFormulaAndFunctionEventAggregation",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionEventQueryGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
