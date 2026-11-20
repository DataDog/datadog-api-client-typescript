/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CellDisplayModeOption } from "./CellDisplayModeOption";
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { QuerySortOrder } from "./QuerySortOrder";
import { QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450132960 } from "./QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450132960";
import { ScalarAggregator } from "./ScalarAggregator";
import { ScalarFormulaSort } from "./ScalarFormulaSort";
import { TableFormula } from "./TableFormula";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableBackendRequest20270101OneOf4460513216 {
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
  "formulas"?: Array<TableFormula>;
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
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450132960;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ScalarFormulaSort;
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
    formulas: {
      baseName: "formulas",
      type: "Array<TableFormula>",
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
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450132960",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ScalarFormulaSort",
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
    return QueryTableBackendRequest20270101OneOf4460513216.attributeTypeMap;
  }

  public constructor() {}
}
