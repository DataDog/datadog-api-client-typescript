import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status value indicating successful completion.
 */
export type TimeseriesAnomalyInvestigationCompleteStatus =
  | typeof COMPLETE
  | UnparsedObject;
export const COMPLETE = "complete";
