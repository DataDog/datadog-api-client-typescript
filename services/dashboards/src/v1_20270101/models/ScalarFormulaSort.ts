import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarFormulaOrderBy } from "./ScalarFormulaOrderBy";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScalarFormulaSort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "count"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "offset"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "orderBy"?: Array<ScalarFormulaOrderBy>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      baseName: "count",
      type: "number",
      format: "double",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "double",
    },
    orderBy: {
      baseName: "order_by",
      type: "Array<ScalarFormulaOrderBy>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScalarFormulaSort.attributeTypeMap;
  }

  public constructor() {}
}
