import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the investigation counts resource.
 */
export type SecurityAgentInvestigationCountsType =
  | typeof INVESTIGATION_COUNTS
  | UnparsedObject;
export const INVESTIGATION_COUNTS = "investigation_counts";
