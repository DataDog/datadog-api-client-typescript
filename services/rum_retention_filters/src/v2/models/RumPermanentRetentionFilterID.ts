import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The identifier of a permanent RUM retention filter.
 */
export type RumPermanentRetentionFilterID =
  | typeof RUM_APM_FLAT_SAMPLING
  | typeof SYNTHETICS_SESSIONS
  | typeof FORCED_REPLAY_SESSIONS
  | UnparsedObject;
export const RUM_APM_FLAT_SAMPLING = "rum_apm_flat_sampling";
export const SYNTHETICS_SESSIONS = "synthetics_sessions";
export const FORCED_REPLAY_SESSIONS = "forced_replay_sessions";
