import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Recorded experiment outcome.
 */
export type ExperimentsExperimentV2DTODataAttributesConclusionOutcome =
  | typeof POSITIVE
  | typeof NEGATIVE
  | typeof NEUTRAL
  | typeof INCONCLUSIVE
  | typeof MISCONFIGURED
  | typeof UNKNOWN
  | UnparsedObject;
export const POSITIVE = "POSITIVE";
export const NEGATIVE = "NEGATIVE";
export const NEUTRAL = "NEUTRAL";
export const INCONCLUSIVE = "INCONCLUSIVE";
export const MISCONFIGURED = "MISCONFIGURED";
export const UNKNOWN = "UNKNOWN";
