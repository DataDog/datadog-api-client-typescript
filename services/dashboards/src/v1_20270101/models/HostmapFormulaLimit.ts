import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapFormulaLimit {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "count"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order"?: QuerySortOrder;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      baseName: "count",
      type: "number",
      format: "double",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostmapFormulaLimit.attributeTypeMap;
  }

  public constructor() {}
}
