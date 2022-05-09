/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { ScatterplotWidgetAggregator } from "./ScatterplotWidgetAggregator";

import { AttributeTypeMap } from "../util";

/**
 * Updated scatter plot.
 */
export class ScatterPlotRequest {
  /**
   * Aggregator used for the request.
   */
  "aggregator"?: ScatterplotWidgetAggregator;
  /**
   * The log query.
   */
  "apmQuery"?: LogQueryDefinition;
  /**
   * The log query.
   */
  "eventQuery"?: LogQueryDefinition;
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
   * Query definition.
   */
  "q"?: string;
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
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregator: {
      baseName: "aggregator",
      type: "ScatterplotWidgetAggregator",
    },
    apmQuery: {
      baseName: "apm_query",
      type: "LogQueryDefinition",
    },
    eventQuery: {
      baseName: "event_query",
      type: "LogQueryDefinition",
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
    return ScatterPlotRequest.attributeTypeMap;
  }

  public constructor() {}
}
