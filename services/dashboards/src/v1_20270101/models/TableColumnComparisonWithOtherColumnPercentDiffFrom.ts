import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableColumnComparisonWithOtherColumnPercentDiffFromType } from "./TableColumnComparisonWithOtherColumnPercentDiffFromType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableColumnComparisonWithOtherColumnPercentDiffFrom {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TableColumnComparisonWithOtherColumnPercentDiffFromType;
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
      type: "TableColumnComparisonWithOtherColumnPercentDiffFromType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableColumnComparisonWithOtherColumnPercentDiffFrom.attributeTypeMap;
  }

  public constructor() {}
}
