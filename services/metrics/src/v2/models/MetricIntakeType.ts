import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of metric. The available types are `0` (unspecified), `1` (count), `2` (rate), and `3` (gauge).
 */
export type MetricIntakeType =
  | typeof UNSPECIFIED
  | typeof COUNT
  | typeof RATE
  | typeof GAUGE
  | UnparsedObject;
export const UNSPECIFIED = 0;
export const COUNT = 1;
export const RATE = 2;
export const GAUGE = 3;
