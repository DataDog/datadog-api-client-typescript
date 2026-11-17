import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { WidgetSort } from "./WidgetSort";

/**
 * Sort configuration for retention group by.
 */
export class RetentionGroupBySort {
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
    order: {
      baseName: "order",
      type: "WidgetSort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
