/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetChangeType } from "./WidgetChangeType";
import { WidgetCompareTo } from "./WidgetCompareTo";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetOrderBy } from "./WidgetOrderBy";
import { WidgetSort } from "./WidgetSort";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Updated change widget.
 */

export class ChangeWidgetRequest {
  "apmQuery"?: LogQueryDefinition;
  "changeType"?: WidgetChangeType;
  "compareTo"?: WidgetCompareTo;
  "eventQuery"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * Whether to show increase as good.
   */
  "increaseGood"?: boolean;
  "logQuery"?: LogQueryDefinition;
  "networkQuery"?: LogQueryDefinition;
  "orderBy"?: WidgetOrderBy;
  "orderDir"?: WidgetSort;
  "processQuery"?: ProcessQueryDefinition;
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * Query definition.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "responseFormat"?: FormulaAndFunctionResponseFormat;
  "rumQuery"?: LogQueryDefinition;
  "securityQuery"?: LogQueryDefinition;
  /**
   * Whether to show the present value.
   */
  "showPresent"?: boolean;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    apmQuery: {
      baseName: "apm_query",
      type: "LogQueryDefinition",
    },
    changeType: {
      baseName: "change_type",
      type: "WidgetChangeType",
    },
    compareTo: {
      baseName: "compare_to",
      type: "WidgetCompareTo",
    },
    eventQuery: {
      baseName: "event_query",
      type: "LogQueryDefinition",
    },
    formulas: {
      baseName: "formulas",
      type: "Array<WidgetFormula>",
    },
    increaseGood: {
      baseName: "increase_good",
      type: "boolean",
    },
    logQuery: {
      baseName: "log_query",
      type: "LogQueryDefinition",
    },
    networkQuery: {
      baseName: "network_query",
      type: "LogQueryDefinition",
    },
    orderBy: {
      baseName: "order_by",
      type: "WidgetOrderBy",
    },
    orderDir: {
      baseName: "order_dir",
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
    showPresent: {
      baseName: "show_present",
      type: "boolean",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
