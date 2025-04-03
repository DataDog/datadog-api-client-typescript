import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs trace remapper.
 */
export type LogsTraceRemapperType = typeof TRACE_ID_REMAPPER | UnparsedObject;
export const TRACE_ID_REMAPPER = "trace-id-remapper";
