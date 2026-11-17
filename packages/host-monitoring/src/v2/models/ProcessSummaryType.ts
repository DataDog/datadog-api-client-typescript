import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of process summary.
 */
export type ProcessSummaryType = typeof PROCESS | UnparsedObject;
export const PROCESS = "process";
