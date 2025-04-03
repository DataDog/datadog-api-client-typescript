import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs service remapper.
 */
export type LogsServiceRemapperType = typeof SERVICE_REMAPPER | UnparsedObject;
export const SERVICE_REMAPPER = "service-remapper";
