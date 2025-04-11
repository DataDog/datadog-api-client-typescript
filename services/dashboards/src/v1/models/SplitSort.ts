import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SplitConfigSortCompute } from "./SplitConfigSortCompute";
import { WidgetSort } from "./WidgetSort";

/**
 * Controls the order in which graphs appear in the split.
 */
export class SplitSort {
  /**
   * Defines the metric and aggregation used as the sort value.
   */
  "compute"?: SplitConfigSortCompute;
  /**
   * Widget sorting methods.
   */
  "order": WidgetSort;
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
    compute: {
      baseName: "compute",
      type: "SplitConfigSortCompute",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitSort.attributeTypeMap;
  }

  public constructor() {}
}
