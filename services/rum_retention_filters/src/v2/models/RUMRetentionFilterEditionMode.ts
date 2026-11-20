import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The types of changes the retention filter accepts. `complete` filters can be updated and deleted.
 * `limited` filters are default retention filters that can't be deleted.
 */
export type RUMRetentionFilterEditionMode =
  | typeof UNKNOWN
  | typeof COMPLETE
  | typeof LIMITED
  | UnparsedObject;
export const UNKNOWN = "unknown";
export const COMPLETE = "complete";
export const LIMITED = "limited";
