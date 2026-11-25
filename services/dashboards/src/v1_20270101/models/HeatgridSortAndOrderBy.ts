import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlatSortBy } from "./FlatSortBy";
import { HeatgridSortAndOrderByNestingDisplay } from "./HeatgridSortAndOrderByNestingDisplay";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridSortAndOrderBy {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nestingDisplay": HeatgridSortAndOrderByNestingDisplay;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sortBy": FlatSortBy;
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
      type: "HeatgridSortAndOrderByNestingDisplay",
      required: true,
    },
    sortBy: {
      baseName: "sort_by",
      type: "FlatSortBy",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridSortAndOrderBy.attributeTypeMap;
  }

  public constructor() {}
}
