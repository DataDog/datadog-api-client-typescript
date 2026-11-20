import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionGroupByItemsSort } from "./RetentionGroupByItemsSort";
import { RetentionGroupByItemsTarget } from "./RetentionGroupByItemsTarget";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionGroupByItems {
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
  "sort"?: RetentionGroupByItemsSort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "target": RetentionGroupByItemsTarget;
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
      type: "RetentionGroupByItemsSort",
    },
    source: {
      baseName: "source",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "RetentionGroupByItemsTarget",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionGroupByItems.attributeTypeMap;
  }

  public constructor() {}
}
