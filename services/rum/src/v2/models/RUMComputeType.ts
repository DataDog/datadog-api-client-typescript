import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of compute. `total` returns one value per bucket, `timeseries` returns a list of time points per bucket.
 */
export type RUMComputeType = typeof TIMESERIES | typeof TOTAL | UnparsedObject;
export const TIMESERIES = "timeseries";
export const TOTAL = "total";
