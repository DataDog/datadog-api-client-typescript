import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableColumnComparisonWithOtherColumnPercentOfType } from "./TableColumnComparisonWithOtherColumnPercentOfType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableColumnComparisonWithOtherColumnPercentOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TableColumnComparisonWithOtherColumnPercentOfType;
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
      type: "TableColumnComparisonWithOtherColumnPercentOfType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableColumnComparisonWithOtherColumnPercentOf.attributeTypeMap;
  }

  public constructor() {}
}
