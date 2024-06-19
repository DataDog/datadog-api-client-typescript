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
   * The maximum buckets to return for this group by. Note: at most 10000 buckets are allowed.
   * If grouping by multiple facets, the product of limits must not exceed 10000.
   */
  "limit"?: number;
  /**
   * The dimension by which to sort a query's results.
   */
  "sort"?: EventsGroupBySort;

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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    sort: {
      baseName: "sort",
      type: "EventsGroupBySort",
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
    return EventsGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
