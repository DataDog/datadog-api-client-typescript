import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of logs status remapper.
 */
export type LogsStatusRemapperType = typeof STATUS_REMAPPER | UnparsedObject;
export const STATUS_REMAPPER = "status-remapper";
