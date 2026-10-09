import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridSortAggregation } from "./HeatgridSortAggregation";
import { HeatgridSortByValueProperty } from "./HeatgridSortByValueProperty";
import { HeatgridSortOrder } from "./HeatgridSortOrder";

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
