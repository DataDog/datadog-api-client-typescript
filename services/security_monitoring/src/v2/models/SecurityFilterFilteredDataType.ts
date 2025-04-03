import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The filtered data type.
 */
export type SecurityFilterFilteredDataType = typeof LOGS | UnparsedObject;
export const LOGS = "logs";
