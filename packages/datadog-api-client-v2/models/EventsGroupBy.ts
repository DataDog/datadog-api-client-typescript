/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsGroupBySort } from "./EventsGroupBySort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A dimension on which to split a query's results.
 */
export class EventsGroupBy {
  /**
   * The facet by which to split groups.
   */
  "facet": string;
  /**
   * The maximum number of groups to return.
   */
  "limit"?: number;
  /**
   * The dimension by which to sort a query's results.
   */
  "sort"?: EventsGroupBySort;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      type: "string",
      required: true,
    },
    limit: {
      type: "number",
      format: "int32",
    },
    sort: {
      type: "EventsGroupBySort",
    },
  };
}
