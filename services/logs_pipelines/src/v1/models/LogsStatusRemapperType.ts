import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs status remapper.
 */
export type LogsStatusRemapperType = typeof STATUS_REMAPPER | UnparsedObject;
export const STATUS_REMAPPER = "status-remapper";
