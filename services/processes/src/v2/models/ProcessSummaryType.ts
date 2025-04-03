import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of process summary.
 */
export type ProcessSummaryType = typeof PROCESS | UnparsedObject;
export const PROCESS = "process";
