import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * WARMUP serves the arms equally. ADAPTIVE serves the initial split or a split from a refresh. FALLBACK serves one variant after the bandit ends.
 */
export type ExperimentsBanditPolicyKind =
  | typeof WARMUP
  | typeof ADAPTIVE
  | typeof FALLBACK
  | UnparsedObject;
export const WARMUP = "WARMUP";
export const ADAPTIVE = "ADAPTIVE";
export const FALLBACK = "FALLBACK";
