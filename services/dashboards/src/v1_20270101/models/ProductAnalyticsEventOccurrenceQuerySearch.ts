import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OccurrenceFilter } from "./OccurrenceFilter";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ProductAnalyticsEventOccurrenceQuerySearch {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "occurrences": OccurrenceFilter;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    occurrences: {
      baseName: "occurrences",
      type: "OccurrenceFilter",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsEventOccurrenceQuerySearch.attributeTypeMap;
  }

  public constructor() {}
}
