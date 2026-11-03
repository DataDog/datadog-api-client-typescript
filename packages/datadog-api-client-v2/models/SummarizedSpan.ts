/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APMSpanErrorFlag } from "./APMSpanErrorFlag";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A node in the pruned trace tree.
 */
export class SummarizedSpan {
  /**
   * The child spans of this node in the pruned tree.
   */
  "children": Array<SummarizedSpan>;
  /**
   * The duration of the span, in seconds.
   */
  "durationSeconds": number;
  /**
   * The end time of the span, in RFC3339 format.
   */
  "endTime": Date;
  /**
   * Error flag for a span. `1` when the span is in error, `0` otherwise.
   */
  "error": APMSpanErrorFlag;
  /**
   * The number of child spans that were pruned from this node when summarizing the trace.
   */
  "hiddenChildSpansCount": number;
  /**
   * String-valued tags attached to the span.
   */
  "meta": { [key: string]: string };
  /**
   * Numeric metrics attached to the span.
   */
  "metrics": { [key: string]: number };
  /**
   * The operation name of the span.
   */
  "name": string;
  /**
   * The ID of the parent span, or `0` when the span is the trace root.
   */
  "parentId": number;
  /**
   * The resource that the span describes.
   */
  "resource": string;
  /**
   * The name of the service that emitted the span.
   */
  "service": string;
  /**
   * The span ID, as an unsigned 64-bit integer.
   */
  "spanId": number;
  /**
   * The OpenTelemetry span kind, for example `INTERNAL`, `SERVER`, `CLIENT`,
   * `PRODUCER`, or `CONSUMER`.
   */
  "spanKind": string;
  /**
   * The start time of the span, in RFC3339 format.
   */
  "startTime": Date;

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
    children: {
      baseName: "children",
      type: "Array<SummarizedSpan>",
      required: true,
    },
    durationSeconds: {
      baseName: "durationSeconds",
      type: "number",
      required: true,
      format: "double",
    },
    endTime: {
      baseName: "endTime",
      type: "Date",
      required: true,
      format: "date-time",
    },
    error: {
      baseName: "error",
      type: "APMSpanErrorFlag",
      required: true,
    },
    hiddenChildSpansCount: {
      baseName: "hidden_child_spans_count",
      type: "number",
      required: true,
      format: "int32",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: string; }",
      required: true,
    },
    metrics: {
      baseName: "metrics",
      type: "{ [key: string]: number; }",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    parentId: {
      baseName: "parentID",
      type: "number",
      required: true,
      format: "int64",
    },
    resource: {
      baseName: "resource",
      type: "string",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    spanId: {
      baseName: "spanID",
      type: "number",
      required: true,
      format: "int64",
    },
    spanKind: {
      baseName: "span_kind",
      type: "string",
      required: true,
    },
    startTime: {
      baseName: "startTime",
      type: "Date",
      required: true,
      format: "date-time",
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
    return SummarizedSpan.attributeTypeMap;
  }

  public constructor() {}
}
