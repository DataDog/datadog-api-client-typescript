/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsAggregator } from "./EventsAggregator";
import { QuerySortOrder } from "./QuerySortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogQueryDefinitionGroupBySort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": EventsAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "facet"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": QuerySortOrder;

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
      type: "EventsAggregator",
      required: true,
    },
    facet: {
      baseName: "facet",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogQueryDefinitionGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
