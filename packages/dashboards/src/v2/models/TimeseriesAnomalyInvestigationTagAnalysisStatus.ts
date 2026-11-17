import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Outcome of optional influential-tag enrichment.
 */
export type TimeseriesAnomalyInvestigationTagAnalysisStatus =
  | typeof COMPLETE
  | typeof UNSUPPORTED
  | typeof FAILED
  | UnparsedObject;
export const COMPLETE = "complete";
export const UNSUPPORTED = "unsupported";
export const FAILED = "failed";
