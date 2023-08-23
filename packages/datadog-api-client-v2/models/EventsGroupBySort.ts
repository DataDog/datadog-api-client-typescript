/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsAggregation } from "./EventsAggregation";
import { EventsSortType } from "./EventsSortType";
import { QuerySortOrder } from "./QuerySortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      type: "EventsAggregation",
      required: true,
    },
    metric: {
      type: "string",
    },
    order: {
      type: "QuerySortOrder",
    },
    type: {
      type: "EventsSortType",
    },
  };
}
