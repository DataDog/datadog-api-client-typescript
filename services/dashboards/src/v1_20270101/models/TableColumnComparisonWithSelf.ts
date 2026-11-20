import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableColumnComparisonWithSelfType } from "./TableColumnComparisonWithSelfType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableColumnComparisonWithSelf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TableColumnComparisonWithSelfType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "TableColumnComparisonWithSelfType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableColumnComparisonWithSelf.attributeTypeMap;
  }

  public constructor() {}
}
