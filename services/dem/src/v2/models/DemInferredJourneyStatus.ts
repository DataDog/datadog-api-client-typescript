import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of an inferred DEM journey.
 */
export type DemInferredJourneyStatus =
  | typeof CANDIDATE
  | typeof IGNORED
  | UnparsedObject;
export const CANDIDATE = "candidate";
export const IGNORED = "ignored";
