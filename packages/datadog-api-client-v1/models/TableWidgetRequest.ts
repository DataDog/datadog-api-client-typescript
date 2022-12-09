/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmStatsQueryDefinition } from "./ApmStatsQueryDefinition";
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetAggregator } from "./WidgetAggregator";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetSort } from "./WidgetSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updated table widget.
 */
export class TableWidgetRequest {
  /**
   * Aggregator used for the request.
   */
  "aggregator"?: WidgetAggregator;
  /**
   * The column name (defaults to the metric name).
   */
  "alias"?: string;
  /**
   * The log query.
   */
  "apmQuery"?: LogQueryDefinition;
  /**
   * The APM stats query for table and distributions widgets.
   */
  "apmStatsQuery"?: ApmStatsQueryDefinition;
  /**
   * A list of display modes for each table cell.
   */
  "cellDisplayMode"?: Array<TableWidgetCellDisplayMode>;
  /**
   * List of conditional formats.
   */
  "conditionalFormats"?: Array<WidgetConditionalFormat>;
  /**
   * The log query.
   */
  "eventQuery"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries.
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * For metric queries, the number of lines to show in the table. Only one request should have this property.
   */
  "limit"?: number;
  /**
   * The log query.
   */
  "logQuery"?: LogQueryDefinition;
  /**
   * The log query.
   */
  "networkQuery"?: LogQueryDefinition;
  /**
   * Widget sorting methods.
   */
  "order"?: WidgetSort;
  /**
   * The process query to use in the widget.
   */
  "processQuery"?: ProcessQueryDefinition;
  /**
   * The log query.
   */
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * Query definition.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas.
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Timeseries or Scalar response.
   */
  "responseFormat"?: FormulaAndFunctionResponseFormat;
  /**
   * The log query.
   */
  "rumQuery"?: LogQueryDefinition;
  /**
   * The log query.
   */
  "securityQuery"?: LogQueryDefinition;

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
      type: "WidgetAggregator",
    },
    alias: {
      baseName: "alias",
      type: "string",
    },
    apmQuery: {
      baseName: "apm_query",
      type: "LogQueryDefinition",
    },
    apmStatsQuery: {
      baseName: "apm_stats_query",
      type: "ApmStatsQueryDefinition",
    },
    cellDisplayMode: {
      baseName: "cell_display_mode",
      type: "Array<TableWidgetCellDisplayMode>",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<WidgetConditionalFormat>",
    },
    eventQuery: {
      baseName: "event_query",
      type: "LogQueryDefinition",
    },
    formulas: {
      baseName: "formulas",
      type: "Array<WidgetFormula>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    logQuery: {
      baseName: "log_query",
      type: "LogQueryDefinition",
    },
    networkQuery: {
      baseName: "network_query",
      type: "LogQueryDefinition",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
    },
    processQuery: {
      baseName: "process_query",
      type: "ProcessQueryDefinition",
    },
    profileMetricsQuery: {
      baseName: "profile_metrics_query",
      type: "LogQueryDefinition",
    },
    q: {
      baseName: "q",
      type: "string",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
    },
    responseFormat: {
      baseName: "response_format",
      type: "FormulaAndFunctionResponseFormat",
    },
    rumQuery: {
      baseName: "rum_query",
      type: "LogQueryDefinition",
    },
    securityQuery: {
      baseName: "security_query",
      type: "LogQueryDefinition",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
