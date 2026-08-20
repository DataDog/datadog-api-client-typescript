import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAnalyticsListSort } from "./ProductAnalyticsAnalyticsListSort";
import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { ProductAnalyticsBaseQuery } from "./ProductAnalyticsBaseQuery";

/**
 * The analytics list query definition. It selects the events to return with `query`, then
 * chooses the columns on each event row, the sort applied to those rows, and a row limit.
 * Unlike the scalar and timeseries queries, a list query returns raw event rows rather than
 * aggregates, so it takes no compute or group-by rule.
 */
export class ProductAnalyticsAnalyticsListQuery {
  /**
   * Audience filter definitions for targeting specific user segments.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * Attribute columns to include in each event row.
   */
  "columns"?: Array<string>;
  /**
   * Maximum number of event rows to return.
   */
  "limit"?: number;
  /**
   * A query definition discriminated by the `data_source` field.
   * Use `product_analytics` for standard event queries, or
   * `product_analytics_occurrence` for occurrence-filtered queries.
   */
  "query": ProductAnalyticsBaseQuery;
  /**
   * The sort applied to the returned event rows.
   */
  "sort"?: ProductAnalyticsAnalyticsListSort;
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
    columns: {
      baseName: "columns",
      type: "Array<string>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsBaseQuery",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ProductAnalyticsAnalyticsListSort",
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
    return ProductAnalyticsAnalyticsListQuery.attributeTypeMap;
  }

  public constructor() {}
}
