import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableColumnComparisonWithOtherColumnDiffFromType } from "./TableColumnComparisonWithOtherColumnDiffFromType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableColumnComparisonWithOtherColumnDiffFrom {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TableColumnComparisonWithOtherColumnDiffFromType;
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
    type: {
      baseName: "type",
      type: "TableColumnComparisonWithOtherColumnDiffFromType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableColumnComparisonWithOtherColumnDiffFrom.attributeTypeMap;
  }

  public constructor() {}
}
