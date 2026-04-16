import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A data source for process-level infrastructure metrics.
 */
export type ProcessDataSource = typeof PROCESS | UnparsedObject;
export const PROCESS = "process";
