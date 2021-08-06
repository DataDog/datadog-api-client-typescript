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
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetRequestStyle } from "./WidgetRequestStyle";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Updated top list widget.
 */

export class ToplistWidgetRequest {
  "apmQuery"?: LogQueryDefinition;
  "auditQuery"?: LogQueryDefinition;
  /**
   * List of conditional formats.
   */
  "conditionalFormats"?: Array<WidgetConditionalFormat>;
  "eventQuery"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  "logQuery"?: LogQueryDefinition;
  "networkQuery"?: LogQueryDefinition;
  "processQuery"?: ProcessQueryDefinition;
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * Widget query.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "responseFormat"?: FormulaAndFunctionResponseFormat;
  "rumQuery"?: LogQueryDefinition;
  "securityQuery"?: LogQueryDefinition;
  "style"?: WidgetRequestStyle;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    apmQuery: {
      baseName: "apm_query",
      type: "LogQueryDefinition",
      format: "",
    },
    auditQuery: {
      baseName: "audit_query",
      type: "LogQueryDefinition",
      format: "",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<WidgetConditionalFormat>",
      format: "",
    },
    eventQuery: {
      baseName: "event_query",
      type: "LogQueryDefinition",
      format: "",
    },
    formulas: {
      baseName: "formulas",
      type: "Array<WidgetFormula>",
      format: "",
    },
    logQuery: {
      baseName: "log_query",
      type: "LogQueryDefinition",
      format: "",
    },
    networkQuery: {
      baseName: "network_query",
      type: "LogQueryDefinition",
      format: "",
    },
    processQuery: {
      baseName: "process_query",
      type: "ProcessQueryDefinition",
      format: "",
    },
    profileMetricsQuery: {
      baseName: "profile_metrics_query",
      type: "LogQueryDefinition",
      format: "",
    },
    q: {
      baseName: "q",
      type: "string",
      format: "",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      format: "",
    },
    responseFormat: {
      baseName: "response_format",
      type: "FormulaAndFunctionResponseFormat",
      format: "",
    },
    rumQuery: {
      baseName: "rum_query",
      type: "LogQueryDefinition",
      format: "",
    },
    securityQuery: {
      baseName: "security_query",
      type: "LogQueryDefinition",
      format: "",
    },
    style: {
      baseName: "style",
      type: "WidgetRequestStyle",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ToplistWidgetRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): ToplistWidgetRequest {
    const res = new ToplistWidgetRequest();

    res.apmQuery = ObjectSerializer.deserialize(
      data.apm_query,
      "LogQueryDefinition",
      ""
    );

    res.auditQuery = ObjectSerializer.deserialize(
      data.audit_query,
      "LogQueryDefinition",
      ""
    );

    res.conditionalFormats = ObjectSerializer.deserialize(
      data.conditional_formats,
      "Array<WidgetConditionalFormat>",
      ""
    );

    res.eventQuery = ObjectSerializer.deserialize(
      data.event_query,
      "LogQueryDefinition",
      ""
    );

    res.formulas = ObjectSerializer.deserialize(
      data.formulas,
      "Array<WidgetFormula>",
      ""
    );

    res.logQuery = ObjectSerializer.deserialize(
      data.log_query,
      "LogQueryDefinition",
      ""
    );

    res.networkQuery = ObjectSerializer.deserialize(
      data.network_query,
      "LogQueryDefinition",
      ""
    );

    res.processQuery = ObjectSerializer.deserialize(
      data.process_query,
      "ProcessQueryDefinition",
      ""
    );

    res.profileMetricsQuery = ObjectSerializer.deserialize(
      data.profile_metrics_query,
      "LogQueryDefinition",
      ""
    );

    res.q = ObjectSerializer.deserialize(data.q, "string", "");

    res.queries = ObjectSerializer.deserialize(
      data.queries,
      "Array<FormulaAndFunctionQueryDefinition>",
      ""
    );

    if (["timeseries", "scalar", undefined].includes(data.response_format)) {
      res.responseFormat = data.response_format;
    } else {
      const raw = new ToplistWidgetRequest();
      raw.unparsedObject = data;
      return raw;
    }

    res.rumQuery = ObjectSerializer.deserialize(
      data.rum_query,
      "LogQueryDefinition",
      ""
    );

    res.securityQuery = ObjectSerializer.deserialize(
      data.security_query,
      "LogQueryDefinition",
      ""
    );

    res.style = ObjectSerializer.deserialize(
      data.style,
      "WidgetRequestStyle",
      ""
    );

    return res;
  }

  static serialize(data: ToplistWidgetRequest): { [key: string]: any } {
    const attributeTypes = ToplistWidgetRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.apm_query = ObjectSerializer.serialize(
      data.apmQuery,
      "LogQueryDefinition",
      ""
    );

    res.audit_query = ObjectSerializer.serialize(
      data.auditQuery,
      "LogQueryDefinition",
      ""
    );

    res.conditional_formats = ObjectSerializer.serialize(
      data.conditionalFormats,
      "Array<WidgetConditionalFormat>",
      ""
    );

    res.event_query = ObjectSerializer.serialize(
      data.eventQuery,
      "LogQueryDefinition",
      ""
    );

    res.formulas = ObjectSerializer.serialize(
      data.formulas,
      "Array<WidgetFormula>",
      ""
    );

    res.log_query = ObjectSerializer.serialize(
      data.logQuery,
      "LogQueryDefinition",
      ""
    );

    res.network_query = ObjectSerializer.serialize(
      data.networkQuery,
      "LogQueryDefinition",
      ""
    );

    res.process_query = ObjectSerializer.serialize(
      data.processQuery,
      "ProcessQueryDefinition",
      ""
    );

    res.profile_metrics_query = ObjectSerializer.serialize(
      data.profileMetricsQuery,
      "LogQueryDefinition",
      ""
    );

    res.q = ObjectSerializer.serialize(data.q, "string", "");

    res.queries = ObjectSerializer.serialize(
      data.queries,
      "Array<FormulaAndFunctionQueryDefinition>",
      ""
    );

    if (["timeseries", "scalar", undefined].includes(data.responseFormat)) {
      res.response_format = data.responseFormat;
    } else {
      throw TypeError(
        `invalid enum value ${data.responseFormat} for responseFormat`
      );
    }

    res.rum_query = ObjectSerializer.serialize(
      data.rumQuery,
      "LogQueryDefinition",
      ""
    );

    res.security_query = ObjectSerializer.serialize(
      data.securityQuery,
      "LogQueryDefinition",
      ""
    );

    res.style = ObjectSerializer.serialize(
      data.style,
      "WidgetRequestStyle",
      ""
    );

    return res;
  }

  public constructor() {}
}
