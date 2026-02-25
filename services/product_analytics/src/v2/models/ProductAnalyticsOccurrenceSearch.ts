import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsOccurrenceFilter } from "./ProductAnalyticsOccurrenceFilter";

/**
 * Search parameters for an occurrence query.
 */
export class ProductAnalyticsOccurrenceSearch {
  /**
   * Filter for occurrence-based queries.
   */
  "occurrences"?: ProductAnalyticsOccurrenceFilter;
  /**
   * The search query using Datadog search syntax.
   */
  "query"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "ProductAnalyticsOccurrenceFilter",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsOccurrenceSearch.attributeTypeMap;
  }

  public constructor() {}
}
