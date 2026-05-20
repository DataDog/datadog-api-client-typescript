/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Filter criteria for an LLM Observability span search.
 */
export class LLMObsSpanFilter {
  /**
   * Start of the time range. Accepts ISO 8601 or relative format (e.g., `now-15m`). Defaults to `now-15m`.
   */
  "from"?: string;
  /**
   * Filter by ML application name.
   */
  "mlApp"?: string;
  /**
   * Search query using LLM Observability query syntax. Supports attribute filters using the field:value syntax (e.g. session_id, trace_id, ml_app, meta.span.kind). When provided, structured field filters (`span_id`, `trace_id`, etc.) are ignored.
   */
  "query"?: string;
  /**
   * Filter by exact span ID.
   */
  "spanId"?: string;
  /**
   * Filter by span kind (e.g., llm, agent, tool, task, workflow).
   */
  "spanKind"?: string;
  /**
   * Filter by span name.
   */
  "spanName"?: string;
  /**
   * Filter by tag key-value pairs.
   */
  "tags"?: { [key: string]: string };
  /**
   * End of the time range. Accepts ISO 8601 or relative format (e.g., `now`). Defaults to `now`.
   */
  "to"?: string;
  /**
   * Filter by exact trace ID.
   */
  "traceId"?: string;

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
    from: {
      baseName: "from",
      type: "string",
    },
    mlApp: {
      baseName: "ml_app",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    spanId: {
      baseName: "span_id",
      type: "string",
    },
    spanKind: {
      baseName: "span_kind",
      type: "string",
    },
    spanName: {
      baseName: "span_name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
    to: {
      baseName: "to",
      type: "string",
    },
    traceId: {
      baseName: "trace_id",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsSpanFilter.attributeTypeMap;
  }

  public constructor() {}
}
