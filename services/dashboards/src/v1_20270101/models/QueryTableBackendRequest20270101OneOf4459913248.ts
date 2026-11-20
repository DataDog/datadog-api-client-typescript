import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CellDisplayModeOption } from "./CellDisplayModeOption";
import { QuerySortOrder } from "./QuerySortOrder";
import { QueryTableBackendRequest20270101OneOfQuery } from "./QueryTableBackendRequest20270101OneOfQuery";
import { QueryTableBackendRequestAnyOfAnyOfItemRequestType4449627456 } from "./QueryTableBackendRequestAnyOfAnyOfItemRequestType4449627456";
import { QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4449627776 } from "./QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4449627776";
import { ScalarAggregator } from "./ScalarAggregator";
import { TabularProjection } from "./TabularProjection";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableBackendRequest20270101OneOf4459913248 {
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
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": QueryTableBackendRequest20270101OneOfQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": QueryTableBackendRequestAnyOfAnyOfItemRequestType4449627456;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4449627776;
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
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    query: {
      baseName: "query",
      type: "QueryTableBackendRequest20270101OneOfQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "QueryTableBackendRequestAnyOfAnyOfItemRequestType4449627456",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4449627776",
      required: true,
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
    return QueryTableBackendRequest20270101OneOf4459913248.attributeTypeMap;
  }

  public constructor() {}
}
