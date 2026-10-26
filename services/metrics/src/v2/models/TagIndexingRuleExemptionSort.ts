import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sort field for tag indexing rule exemptions.
 */
export type TagIndexingRuleExemptionSort =
  | typeof NAME
  | typeof NAME_DESCENDING
  | typeof ESTIMATED_CHANGE_IN_VOLUME
  | typeof ESTIMATED_CHANGE_IN_VOLUME_DESCENDING
  | UnparsedObject;
export const NAME = "name";
export const NAME_DESCENDING = "-name";
export const ESTIMATED_CHANGE_IN_VOLUME = "estimated_change_in_volume";
export const ESTIMATED_CHANGE_IN_VOLUME_DESCENDING =
  "-estimated_change_in_volume";
