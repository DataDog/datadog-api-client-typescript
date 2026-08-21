import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyAudienceFilters } from "./ProductAnalyticsJourneyAudienceFilters";
import { ProductAnalyticsJourneySearchGraphFilter } from "./ProductAnalyticsJourneySearchGraphFilter";

/**
 * Filters applied on top of the journey step expression.
 */
export class ProductAnalyticsJourneySearchFilters {
  /**
   * Restricts the journey to an audience built from named sub-queries.
   * Sub-query names must be unique across `users`, `segments`, and `accounts`.
   */
  "audienceFilters"?: ProductAnalyticsJourneyAudienceFilters;
  /**
   * Filters on journey-level metrics such as time to convert.
   */
  "graphFilters"?: Array<ProductAnalyticsJourneySearchGraphFilter>;
  /**
   * Free-text search query applied to the whole journey.
   */
  "stringFilter"?: string;
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
    audienceFilters: {
      baseName: "audience_filters",
      type: "ProductAnalyticsJourneyAudienceFilters",
    },
    graphFilters: {
      baseName: "graph_filters",
      type: "Array<ProductAnalyticsJourneySearchGraphFilter>",
    },
    stringFilter: {
      baseName: "string_filter",
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
    return ProductAnalyticsJourneySearchFilters.attributeTypeMap;
  }

  public constructor() {}
}
