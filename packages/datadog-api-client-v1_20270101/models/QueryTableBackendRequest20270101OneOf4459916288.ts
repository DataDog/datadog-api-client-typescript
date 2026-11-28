/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CellDisplayModeOption } from "./CellDisplayModeOption";
import { DashboardInlineSchema4 } from "./DashboardInlineSchema4";
import { QuerySortOrder } from "./QuerySortOrder";
import { ScalarAggregator } from "./ScalarAggregator";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableBackendRequest20270101OneOf4459916288 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryOptions"?: { [key: string]: DashboardInlineSchema4 };
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
  "q": string;
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
    queryOptions: {
      baseName: "_query_options",
      type: "{ [key: string]: DashboardInlineSchema4; }",
    },
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
    q: {
      baseName: "q",
      type: "string",
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
    return QueryTableBackendRequest20270101OneOf4459916288.attributeTypeMap;
  }

  public constructor() {}
}
