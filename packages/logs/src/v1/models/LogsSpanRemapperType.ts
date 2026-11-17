import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of logs span remapper.
 */
export type LogsSpanRemapperType = typeof SPAN_ID_REMAPPER | UnparsedObject;
export const SPAN_ID_REMAPPER = "span-id-remapper";
