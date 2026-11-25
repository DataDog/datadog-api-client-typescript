import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ComputeTableColumnCompute } from "./ComputeTableColumnCompute";
import { ComputeTableColumnType } from "./ComputeTableColumnType";
import { TableColumnComparison } from "./TableColumnComparison";
import { TableColumnFormat } from "./TableColumnFormat";
import { TableColumnFunction } from "./TableColumnFunction";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ComputeTableColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "comparison"?: TableColumnComparison;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": ComputeTableColumnCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "format": TableColumnFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "functions"?: Array<TableColumnFunction>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isHidden"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ComputeTableColumnType;
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
    comparison: {
      baseName: "comparison",
      type: "TableColumnComparison",
    },
    compute: {
      baseName: "compute",
      type: "ComputeTableColumnCompute",
      required: true,
    },
    format: {
      baseName: "format",
      type: "TableColumnFormat",
      required: true,
    },
    functions: {
      baseName: "functions",
      type: "Array<TableColumnFunction>",
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
    type: {
      baseName: "type",
      type: "ComputeTableColumnType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ComputeTableColumn.attributeTypeMap;
  }

  public constructor() {}
}
