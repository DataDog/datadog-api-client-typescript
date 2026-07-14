import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The events-based data source for the query.
 */
export type DashboardAvailableValuesEventsDataSource =
  | typeof SPANS
  | typeof LOGS
  | typeof RUM
  | UnparsedObject;
export const SPANS = "spans";
export const LOGS = "logs";
export const RUM = "rum";
