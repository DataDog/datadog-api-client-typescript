import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetAggregator } from "./WidgetAggregator";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormula } from "./WidgetFormula";

/**
 * Updated query value widget.
 */
export class QueryValueWidgetRequest {
  /**
   * Aggregator used for the request.
   */
  "aggregator"?: WidgetAggregator;
  /**
   * The log query.
   */
  "apmQuery"?: LogQueryDefinition;
  /**
   * The log query.
   */
  "auditQuery"?: LogQueryDefinition;
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
   * The log query.
   */
  "logQuery"?: LogQueryDefinition;
  /**
   * The log query.
   */
  "networkQuery"?: LogQueryDefinition;
  /**
   * The process query to use in the widget.
   */
  "processQuery"?: ProcessQueryDefinition;
  /**
   * The log query.
   */
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * TODO.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas.
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Timeseries, scalar, or event list response. Event list response formats are supported by Geomap widgets.
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
    aggregator: {
      baseName: "aggregator",
      type: "WidgetAggregator",
    },
    apmQuery: {
      baseName: "apm_query",
      type: "LogQueryDefinition",
    },
    auditQuery: {
      baseName: "audit_query",
      type: "LogQueryDefinition",
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
    logQuery: {
      baseName: "log_query",
      type: "LogQueryDefinition",
    },
    networkQuery: {
      baseName: "network_query",
      type: "LogQueryDefinition",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryValueWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
