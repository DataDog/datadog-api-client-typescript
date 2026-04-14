/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetSort } from "./WidgetSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
