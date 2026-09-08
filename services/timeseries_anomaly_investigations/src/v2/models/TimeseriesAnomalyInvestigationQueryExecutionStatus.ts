import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Current execution status for a named query.
 */
export type TimeseriesAnomalyInvestigationQueryExecutionStatus =
  | typeof RUNNING
  | typeof DONE
  | UnparsedObject;
export const RUNNING = "running";
export const DONE = "done";
