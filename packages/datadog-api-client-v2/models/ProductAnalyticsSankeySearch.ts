/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { ProductAnalyticsJoinKeys } from "./ProductAnalyticsJoinKeys";
import { ProductAnalyticsOccurrenceFilter } from "./ProductAnalyticsOccurrenceFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Search parameters for a Sankey query.
 */
export class ProductAnalyticsSankeySearch {
  /**
   * Audience filter definitions for targeting specific user segments.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * Join key configuration for correlating events.
   */
  "joinKeys"?: ProductAnalyticsJoinKeys;
  /**
   * Filter for occurrence-based queries.
   */
  "occurrences"?: ProductAnalyticsOccurrenceFilter;
  /**
   * The search query. Cannot be empty.
   */
  "query": string;
  "subqueryId"?: string;

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
    occurrences: {
      baseName: "occurrences",
      type: "ProductAnalyticsOccurrenceFilter",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    subqueryId: {
      baseName: "subquery_id",
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
