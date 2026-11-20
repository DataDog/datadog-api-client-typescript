import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryGroupBySort } from "./FormulaAndFunctionEventQueryGroupBySort";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaAndFunctionEventQueryGroupByFields {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fields": Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "shouldExcludeMissing"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: FormulaAndFunctionEventQueryGroupBySort;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fields: {
      baseName: "fields",
      type: "Array<string>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    shouldExcludeMissing: {
      baseName: "should_exclude_missing",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "FormulaAndFunctionEventQueryGroupBySort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionEventQueryGroupByFields.attributeTypeMap;
  }

  public constructor() {}
}
