import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { ProductAnalyticsAudienceOccurrenceFilter } from "./ProductAnalyticsAudienceOccurrenceFilter";
import { SankeyJoinKeys } from "./SankeyJoinKeys";
import { SankeyRumDataSource } from "./SankeyRumDataSource";
import { SankeyRumQueryMode } from "./SankeyRumQueryMode";

/**
 * Sankey widget with RUM data source query.
 */
export class SankeyRumQuery {
  /**
   * Product Analytics/RUM audience filters.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * Sankey widget with RUM data source.
   */
  "dataSource": SankeyRumDataSource;
  /**
   * Entries per step.
   */
  "entriesPerStep"?: number;
  /**
   * Join keys.
   */
  "joinKeys"?: SankeyJoinKeys;
  /**
   * Sankey mode for RUM queries.
   */
  "mode": SankeyRumQueryMode;
  /**
   * Number of steps.
   */
  "numberOfSteps"?: number;
  "occurrences"?: ProductAnalyticsAudienceOccurrenceFilter;
  /**
   * Query string.
   */
  "queryString": string;
  /**
   * Source.
   */
  "source"?: string;
  /**
   * Subquery ID.
   */
  "subqueryId"?: string;
  /**
   * Target.
   */
  "target"?: string;
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
    dataSource: {
      baseName: "data_source",
      type: "SankeyRumDataSource",
      required: true,
    },
    entriesPerStep: {
      baseName: "entries_per_step",
      type: "number",
      format: "int64",
    },
    joinKeys: {
      baseName: "join_keys",
      type: "SankeyJoinKeys",
    },
    mode: {
      baseName: "mode",
      type: "SankeyRumQueryMode",
      required: true,
    },
    numberOfSteps: {
      baseName: "number_of_steps",
      type: "number",
      format: "int64",
    },
    occurrences: {
      baseName: "occurrences",
      type: "ProductAnalyticsAudienceOccurrenceFilter",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
    },
    subqueryId: {
      baseName: "subquery_id",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyRumQuery.attributeTypeMap;
  }

  public constructor() {}
}
