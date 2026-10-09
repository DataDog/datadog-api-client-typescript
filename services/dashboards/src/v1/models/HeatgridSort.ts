import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridNestingDisplay } from "./HeatgridNestingDisplay";
import { HeatgridSortBy } from "./HeatgridSortBy";

/**
 * Ordering of the heatgrid rows.
 */
export class HeatgridSort {
  /**
   * Display groups as flat rows.
   */
  "nestingDisplay": HeatgridNestingDisplay;
  /**
   * Sort rows by aggregated value or group label.
   */
  "sortBy": HeatgridSortBy;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    nestingDisplay: {
      baseName: "nesting_display",
      type: "HeatgridNestingDisplay",
      required: true,
    },
    sortBy: {
      baseName: "sort_by",
      type: "HeatgridSortBy",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridSort.attributeTypeMap;
  }

  public constructor() {}
}
