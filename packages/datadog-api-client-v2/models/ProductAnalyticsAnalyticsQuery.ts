/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { ProductAnalyticsBaseQuery } from "./ProductAnalyticsBaseQuery";
import { ProductAnalyticsCompute } from "./ProductAnalyticsCompute";
import { ProductAnalyticsGroupBy } from "./ProductAnalyticsGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The analytics query definition containing a base query, compute rule, and optional grouping.
 */
export class ProductAnalyticsAnalyticsQuery {
  /**
   * Audience filter definitions for targeting specific user segments.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * A compute rule for aggregating data.
   */
  "compute": ProductAnalyticsCompute;
  /**
   * Group-by rules for segmenting results.
   */
  "groupBy"?: Array<ProductAnalyticsGroupBy>;
  /**
   * Restrict the query to specific indexes. Max 1 entry.
   */
  "indexes"?: Array<string>;
  /**
   * A query definition discriminated by the `data_source` field.
   * Use `product_analytics` for standard event queries, or
   * `product_analytics_occurrence` for occurrence-filtered queries.
   */
  "query": ProductAnalyticsBaseQuery;

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
    compute: {
      baseName: "compute",
      type: "ProductAnalyticsCompute",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsGroupBy>",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsBaseQuery",
      required: true,
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
    return ProductAnalyticsAnalyticsQuery.attributeTypeMap;
  }

  public constructor() {}
}
