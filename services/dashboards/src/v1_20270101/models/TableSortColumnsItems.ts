import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableSortColumnsItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": QuerySortOrder;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableSortColumnsItems.attributeTypeMap;
  }

  public constructor() {}
}
