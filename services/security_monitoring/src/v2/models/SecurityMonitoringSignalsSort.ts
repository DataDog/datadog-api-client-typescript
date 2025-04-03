import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The sort parameters used for querying security signals.
 */
export type SecurityMonitoringSignalsSort =
  | typeof TIMESTAMP_ASCENDING
  | typeof TIMESTAMP_DESCENDING
  | UnparsedObject;
export const TIMESTAMP_ASCENDING = "timestamp";
export const TIMESTAMP_DESCENDING = "-timestamp";
