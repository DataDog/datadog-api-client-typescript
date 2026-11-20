import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaOrderByFormulaIndexType } from "./FormulaOrderByFormulaIndexType";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaOrderByFormulaIndex {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "index": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": FormulaOrderByFormulaIndexType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    index: {
      baseName: "index",
      type: "number",
      required: true,
      format: "double",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormulaOrderByFormulaIndexType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaOrderByFormulaIndex.attributeTypeMap;
  }

  public constructor() {}
}
