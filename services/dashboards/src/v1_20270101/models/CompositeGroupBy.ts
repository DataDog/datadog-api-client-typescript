import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CompositeQuerySorting } from "./CompositeQuerySorting";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeGroupBy {
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
  "sort"?: CompositeQuerySorting;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source"?: string;
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
      type: "CompositeQuerySorting",
    },
    source: {
      baseName: "source",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompositeGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
