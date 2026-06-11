import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The policy for matching the latest form version during an upsert operation.
 */
export type LatestVersionMatchPolicy =
  | typeof NONE
  | typeof IF_ETAG_MATCH
  | UnparsedObject;
export const NONE = "none";
export const IF_ETAG_MATCH = "if_etag_match";
