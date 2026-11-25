import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CellDisplayModeOption } from "./CellDisplayModeOption";
import { GuidedTableQuery } from "./GuidedTableQuery";
import { QuerySortOrder } from "./QuerySortOrder";
import { QueryTableBackendRequestAnyOfAnyOfItemRequestType4450129280 } from "./QueryTableBackendRequestAnyOfAnyOfItemRequestType4450129280";
import { ScalarAggregator } from "./ScalarAggregator";
import { TableColumn } from "./TableColumn";
import { TableRows } from "./TableRows";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableBackendRequest20270101OneOf4460313504 {
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
  "columns": Array<TableColumn>;
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
  "queries": Array<GuidedTableQuery>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": QueryTableBackendRequestAnyOfAnyOfItemRequestType4450129280;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "rows": TableRows;
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
    columns: {
      baseName: "columns",
      type: "Array<TableColumn>",
      required: true,
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
    queries: {
      baseName: "queries",
      type: "Array<GuidedTableQuery>",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "QueryTableBackendRequestAnyOfAnyOfItemRequestType4450129280",
      required: true,
    },
    rows: {
      baseName: "rows",
      type: "TableRows",
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
    return QueryTableBackendRequest20270101OneOf4460313504.attributeTypeMap;
  }

  public constructor() {}
}
