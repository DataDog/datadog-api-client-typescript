import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryGroupBySort } from "./FormulaAndFunctionEventQueryGroupBySort";
import { GraphTarget } from "./GraphTarget";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaGraphQueryGroupByItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "facet": string;
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
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "target"?: GraphTarget;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      baseName: "facet",
      type: "string",
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
    source: {
      baseName: "source",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "GraphTarget",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaGraphQueryGroupByItems.attributeTypeMap;
  }

  public constructor() {}
}
