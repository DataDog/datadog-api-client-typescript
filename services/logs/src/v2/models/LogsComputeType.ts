import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of compute
 */
export type LogsComputeType = typeof TIMESERIES | typeof TOTAL | UnparsedObject;
export const TIMESERIES = "timeseries";
export const TOTAL = "total";
