import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableSortColumnsItems } from "./TableSortColumnsItems";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableSort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<TableSortColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit": number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<TableSortColumnsItems>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableSort.attributeTypeMap;
  }

  public constructor() {}
}
