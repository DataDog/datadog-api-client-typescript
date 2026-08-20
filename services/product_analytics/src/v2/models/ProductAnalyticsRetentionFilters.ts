import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";

/**
 * Filters narrowing the events considered by a retention query.
 */
export class ProductAnalyticsRetentionFilters {
  /**
   * Audience filter definitions for targeting specific user segments.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * Free-text search query applied to the events.
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
      type: "ProductAnalyticsAudienceFilters",
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
    return ProductAnalyticsRetentionFilters.attributeTypeMap;
  }

  public constructor() {}
}
