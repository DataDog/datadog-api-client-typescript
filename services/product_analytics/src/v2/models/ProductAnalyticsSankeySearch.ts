import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { ProductAnalyticsJoinKeys } from "./ProductAnalyticsJoinKeys";

/**
 * Selects the sessions a Sankey diagram is built from.
 */
export class ProductAnalyticsSankeySearch {
  /**
   * Audience filter definitions for targeting specific user segments.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * Identity join keys used to stitch events belonging to the same user or session.
   */
  "joinKeys"?: ProductAnalyticsJoinKeys;
  /**
   * Datadog search query restricting the events considered.
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
    audienceFilters: {
      baseName: "audience_filters",
      type: "ProductAnalyticsAudienceFilters",
    },
    joinKeys: {
      baseName: "join_keys",
      type: "ProductAnalyticsJoinKeys",
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
    return ProductAnalyticsSankeySearch.attributeTypeMap;
  }

  public constructor() {}
}
