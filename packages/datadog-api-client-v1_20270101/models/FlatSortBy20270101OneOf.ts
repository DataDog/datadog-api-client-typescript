/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlatSortByAnyOfAnyOfItemProperty } from "./FlatSortByAnyOfAnyOfItemProperty";
import { HeatGridSortAggregation } from "./HeatGridSortAggregation";
import { QuerySortOrder } from "./QuerySortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FlatSortBy20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": HeatGridSortAggregation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "property": FlatSortByAnyOfAnyOfItemProperty;

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
      type: "HeatGridSortAggregation",
      required: true,
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
      required: true,
    },
    property: {
      baseName: "property",
      type: "FlatSortByAnyOfAnyOfItemProperty",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FlatSortBy20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
