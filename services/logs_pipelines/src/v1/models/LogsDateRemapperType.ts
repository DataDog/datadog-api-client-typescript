import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs date remapper.
 */
export type LogsDateRemapperType = typeof DATE_REMAPPER | UnparsedObject;
export const DATE_REMAPPER = "date-remapper";
