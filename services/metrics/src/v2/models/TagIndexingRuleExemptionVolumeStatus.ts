import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates whether `estimated_change_in_volume` is available and, if not, why. `ok` indicates a fresh estimate.
 * `unindexed_tags` indicates that the matching rule uses tags that are not indexed for the metric.
 * `unavailable` indicates that the estimate is stale, was not computed, or could not be retrieved.
 */
export type TagIndexingRuleExemptionVolumeStatus =
  | typeof OK
  | typeof UNINDEXED_TAGS
  | typeof UNAVAILABLE
  | UnparsedObject;
export const OK = "ok";
export const UNINDEXED_TAGS = "unindexed_tags";
export const UNAVAILABLE = "unavailable";
