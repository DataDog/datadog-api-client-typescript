import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableRowGroupBy } from "./TableRowGroupBy";
import { TableRowsJoinType } from "./TableRowsJoinType";
import { TableSort } from "./TableSort";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableRows {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy": Array<TableRowGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinType"?: TableRowsJoinType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort": TableSort;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    groupBy: {
      baseName: "group_by",
      type: "Array<TableRowGroupBy>",
      required: true,
    },
    joinType: {
      baseName: "join_type",
      type: "TableRowsJoinType",
    },
    sort: {
      baseName: "sort",
      type: "TableSort",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRows.attributeTypeMap;
  }

  public constructor() {}
}
