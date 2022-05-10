/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventQueryDefinition } from "./EventQueryDefinition";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetStyle } from "./WidgetStyle";

import { AttributeTypeMap } from "../util";

/**
 * Updated heat map widget.
 */
export class HeatMapWidgetRequest {
  /**
   * The log query.
   */
  "apmQuery"?: LogQueryDefinition;
  /**
   * The event query.
   */
  "eventQuery"?: EventQueryDefinition;
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
   * Widget query.
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
   * Widget style definition.
   */
  "style"?: WidgetStyle;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apmQuery: {
      baseName: "apm_query",
      type: "LogQueryDefinition",
    },
    eventQuery: {
      baseName: "event_query",
      type: "EventQueryDefinition",
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
    style: {
      baseName: "style",
      type: "WidgetStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatMapWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
