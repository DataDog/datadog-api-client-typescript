import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryGroupBySort } from "./FormulaAndFunctionEventQueryGroupBySort";
import { GraphTarget } from "./GraphTarget";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class UserJourneyGroupBy {
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
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "valueFilters"?: Array<string>;
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
    valueFilters: {
      baseName: "value_filters",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserJourneyGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
