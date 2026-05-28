import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APMSpanErrorFlag } from "./APMSpanErrorFlag";

/**
 * A single APM span returned as part of a trace.
 */
export class APMTraceSpan {
  /**
   * The duration of the span, in nanoseconds.
   */
  "duration": number;
  /**
   * The end time of the span, in Unix nanoseconds.
   */
  "endTime": number;
  /**
   * Error flag for a span. `1` when the span is in error, `0` otherwise.
   */
  "error": APMSpanErrorFlag;
  /**
   * String-valued tags attached to the span. Tag keys starting with `_` are
   * filtered out of the response.
   */
  "meta": { [key: string]: string };
  /**
   * Numeric metrics attached to the span. Metric keys starting with `_` are
   * filtered out of the response.
   */
  "metrics": { [key: string]: number };
  /**
   * The operation name of the span.
   */
  "name": string;
  /**
   * The ID of the parent span, or `0` when the span is a trace root.
   */
  "parentId": number;
  /**
   * The resource that the span describes.
   */
  "resource": string;
  /**
   * A hash of the resource field.
   */
  "resourceHash"?: string;
  /**
   * Whether access to the span is restricted by the organization's data access policies.
   */
  "restricted"?: boolean;
  /**
   * The time spent in the span itself, excluding time spent in child spans, in nanoseconds.
   */
  "selfTime"?: number;
  /**
   * The name of the service that emitted the span.
   */
  "service": string;
  /**
   * The span ID, as an unsigned 64-bit integer.
   */
  "spanId": number;
  /**
   * The start time of the span, in Unix nanoseconds.
   */
  "startTime": number;
  /**
   * The lower 64 bits of the trace ID, as an unsigned 64-bit integer.
   */
  "traceId": number;
  /**
   * The full 128-bit trace ID, encoded as a 32-character hexadecimal string.
   */
  "traceIdFull": string;
  /**
   * The type of the span (for example, `web`, `db`, or `rpc`).
   */
  "type": string;
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
    duration: {
      baseName: "duration",
      type: "number",
      required: true,
      format: "int64",
    },
    endTime: {
      baseName: "endTime",
      type: "number",
      required: true,
      format: "int64",
    },
    error: {
      baseName: "error",
      type: "APMSpanErrorFlag",
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
    resourceHash: {
      baseName: "resourceHash",
      type: "string",
    },
    restricted: {
      baseName: "restricted",
      type: "boolean",
    },
    selfTime: {
      baseName: "self_time",
      type: "number",
      format: "double",
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
    startTime: {
      baseName: "startTime",
      type: "number",
      required: true,
      format: "int64",
    },
    traceId: {
      baseName: "traceID",
      type: "number",
      required: true,
      format: "int64",
    },
    traceIdFull: {
      baseName: "traceIDFull",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
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
    return APMTraceSpan.attributeTypeMap;
  }

  public constructor() {}
}
