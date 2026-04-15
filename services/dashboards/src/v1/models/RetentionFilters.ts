import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";

/**
 * Filters for retention queries.
 */
export class RetentionFilters {
  /**
   * Product Analytics/RUM audience filters.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * String filter.
   */
  "stringFilter"?: string;
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
      type: "ProductAnalyticsAudienceFilters",
    },
    stringFilter: {
      baseName: "string_filter",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionFilters.attributeTypeMap;
  }

  public constructor() {}
}
