import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmStatsQuery } from "./ApmStatsQuery";
import { CellDisplayModeOption } from "./CellDisplayModeOption";
import { QuerySortOrder } from "./QuerySortOrder";
import { ScalarAggregator } from "./ScalarAggregator";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableBackendRequest20270101OneOf4460311264 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregator"?: ScalarAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "apmStatsQuery": ApmStatsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "cellDisplayMode"?: Array<CellDisplayModeOption>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order"?: QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textFormats"?: Array<Array<TextFormattingRule>>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregator: {
      baseName: "aggregator",
      type: "ScalarAggregator",
    },
    alias: {
      baseName: "alias",
      type: "string",
    },
    apmStatsQuery: {
      baseName: "apm_stats_query",
      type: "ApmStatsQuery",
      required: true,
    },
    cellDisplayMode: {
      baseName: "cell_display_mode",
      type: "Array<CellDisplayModeOption>",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
    },
    textFormats: {
      baseName: "text_formats",
      type: "Array<Array<TextFormattingRule>>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryTableBackendRequest20270101OneOf4460311264.attributeTypeMap;
  }

  public constructor() {}
}
