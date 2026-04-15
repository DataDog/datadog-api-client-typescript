import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetSort } from "./WidgetSort";

/**
 * Sort configuration for user journey funnel group by.
 */
export class ProductAnalyticsFunnelGroupBySort {
  /**
   * Aggregation type.
   */
  "aggregation": string;
  /**
   * Metric to sort by.
   */
  "metric"?: string;
  /**
   * Widget sorting methods.
   */
  "order"?: WidgetSort;
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
      type: "string",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsFunnelGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
