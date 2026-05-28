import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the trace resource. The value is always `trace`.
 */
export type TraceType = typeof TRACE | UnparsedObject;
export const TRACE = "trace";
