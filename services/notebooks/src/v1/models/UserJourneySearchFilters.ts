import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { UserJourneySearchGraphFilter } from "./UserJourneySearchGraphFilter";

/**
 * Filters for user journey search.
 */
export class UserJourneySearchFilters {
  /**
   * Product Analytics/RUM audience filters.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * Graph filters.
   */
  "graphFilters"?: Array<UserJourneySearchGraphFilter>;
  /**
   * String filter.
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
    graphFilters: {
      baseName: "graph_filters",
      type: "Array<UserJourneySearchGraphFilter>",
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
    return UserJourneySearchFilters.attributeTypeMap;
  }

  public constructor() {}
}
