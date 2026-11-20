import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AdvancedQueryDataset } from "./AdvancedQueryDataset";
import { CellDisplayModeOption } from "./CellDisplayModeOption";
import { QuerySortOrder } from "./QuerySortOrder";
import { QueryTableBackendRequestAnyOfAnyOfItemRequestType4450135840 } from "./QueryTableBackendRequestAnyOfAnyOfItemRequestType4450135840";
import { QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450136640 } from "./QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450136640";
import { ScalarAggregator } from "./ScalarAggregator";
import { TabularProjection } from "./TabularProjection";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableBackendRequest20270101OneOf4460516096 {
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
  "datasetToQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasets": Array<AdvancedQueryDataset>;
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
  "requestType": QueryTableBackendRequestAnyOfAnyOfItemRequestType4450135840;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450136640;
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
    datasetToQuery: {
      baseName: "dataset_to_query",
      type: "string",
      required: true,
    },
    datasets: {
      baseName: "datasets",
      type: "Array<AdvancedQueryDataset>",
      required: true,
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
    requestType: {
      baseName: "request_type",
      type: "QueryTableBackendRequestAnyOfAnyOfItemRequestType4450135840",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450136640",
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
    return QueryTableBackendRequest20270101OneOf4460516096.attributeTypeMap;
  }

  public constructor() {}
}
