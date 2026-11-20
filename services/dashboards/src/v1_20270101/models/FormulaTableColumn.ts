import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaTableColumnType } from "./FormulaTableColumnType";
import { TableColumnComparison } from "./TableColumnComparison";
import { TableColumnFormat } from "./TableColumnFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaTableColumn {
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
  "format": TableColumnFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formula": string;
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
  "type": FormulaTableColumnType;
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
    format: {
      baseName: "format",
      type: "TableColumnFormat",
      required: true,
    },
    formula: {
      baseName: "formula",
      type: "string",
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
    type: {
      baseName: "type",
      type: "FormulaTableColumnType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaTableColumn.attributeTypeMap;
  }

  public constructor() {}
}
