/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmStatsQueryDefinition } from "./ApmStatsQueryDefinition";
import { DistributionWidgetHistogramRequestQuery } from "./DistributionWidgetHistogramRequestQuery";
import { DistributionWidgetHistogramRequestType } from "./DistributionWidgetHistogramRequestType";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetStyle } from "./WidgetStyle";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Updated distribution widget.
*/
export class DistributionWidgetRequest {
  /**
   * The log query.
  */
  "apmQuery"?: LogQueryDefinition;
  /**
   * The APM stats query for table and distributions widgets.
  */
  "apmStatsQuery"?: ApmStatsQueryDefinition;
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
   * Widget query.
  */
  "q"?: string;
  /**
   * Query definition for Distribution Widget Histogram Request
  */
  "query"?: DistributionWidgetHistogramRequestQuery;
  /**
   * Request type for the histogram request.
  */
  "requestType"?: DistributionWidgetHistogramRequestType;
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
    "apmQuery": {
      "baseName": "apm_query",
      "type": "LogQueryDefinition",
    },
    "apmStatsQuery": {
      "baseName": "apm_stats_query",
      "type": "ApmStatsQueryDefinition",
    },
    "eventQuery": {
      "baseName": "event_query",
      "type": "LogQueryDefinition",
    },
    "logQuery": {
      "baseName": "log_query",
      "type": "LogQueryDefinition",
    },
    "networkQuery": {
      "baseName": "network_query",
      "type": "LogQueryDefinition",
    },
    "processQuery": {
      "baseName": "process_query",
      "type": "ProcessQueryDefinition",
    },
    "profileMetricsQuery": {
      "baseName": "profile_metrics_query",
      "type": "LogQueryDefinition",
    },
    "q": {
      "baseName": "q",
      "type": "string",
    },
    "query": {
      "baseName": "query",
      "type": "DistributionWidgetHistogramRequestQuery",
    },
    "requestType": {
      "baseName": "request_type",
      "type": "DistributionWidgetHistogramRequestType",
    },
    "rumQuery": {
      "baseName": "rum_query",
      "type": "LogQueryDefinition",
    },
    "securityQuery": {
      "baseName": "security_query",
      "type": "LogQueryDefinition",
    },
    "style": {
      "baseName": "style",
      "type": "WidgetStyle",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return DistributionWidgetRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









