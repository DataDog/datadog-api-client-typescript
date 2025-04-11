import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsAggregation } from "./EventsAggregation";
import { EventsSortType } from "./EventsSortType";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * The dimension by which to sort a query's results.
 */
export class EventsGroupBySort {
  /**
   * The type of aggregation that can be performed on events-based queries.
   */
  "aggregation": EventsAggregation;
  /**
   * The metric's calculated value which should be used to define the sort order of a query's results.
   */
  "metric"?: string;
  /**
   * Direction of sort.
   */
  "order"?: QuerySortOrder;
  /**
   * The type of sort to use on the calculated value.
   */
  "type"?: EventsSortType;
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
      type: "EventsAggregation",
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
    type: {
      baseName: "type",
      type: "EventsSortType",
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
    return EventsGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
