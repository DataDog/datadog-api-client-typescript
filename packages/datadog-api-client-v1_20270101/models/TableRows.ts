/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableRowGroupBy } from "./TableRowGroupBy";
import { TableRowsJoinType } from "./TableRowsJoinType";
import { TableSort } from "./TableSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
