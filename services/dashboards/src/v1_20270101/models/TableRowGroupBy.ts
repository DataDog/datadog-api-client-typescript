import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableGroupKey } from "./TableGroupKey";
import { TableRowGroupByFormat } from "./TableRowGroupByFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableRowGroupBy {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "format"?: TableRowGroupByFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupKeys": Array<TableGroupKey>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isHidden"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    format: {
      baseName: "format",
      type: "TableRowGroupByFormat",
    },
    groupKeys: {
      baseName: "group_keys",
      type: "Array<TableGroupKey>",
      required: true,
    },
    isHidden: {
      baseName: "is_hidden",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRowGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
