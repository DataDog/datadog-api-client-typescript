/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridSortAggregation } from "./HeatgridSortAggregation";
import { HeatgridSortByValueProperty } from "./HeatgridSortByValueProperty";
import { HeatgridSortOrder } from "./HeatgridSortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Sort rows by their aggregated values.
 */
export class HeatgridSortByValue {
  /**
   * Aggregation used to order rows over the displayed time range.
   */
  "aggregation": HeatgridSortAggregation;
  /**
   * Sort direction.
   */
  "order": HeatgridSortOrder;
  /**
   * Sort by value.
   */
  "property": HeatgridSortByValueProperty;

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
      type: "HeatgridSortAggregation",
      required: true,
    },
    order: {
      baseName: "order",
      type: "HeatgridSortOrder",
      required: true,
    },
    property: {
      baseName: "property",
      type: "HeatgridSortByValueProperty",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridSortByValue.attributeTypeMap;
  }

  public constructor() {}
}
