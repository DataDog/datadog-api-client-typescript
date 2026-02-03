import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Rum replay watch resource type.
 */
export type WatchDataType = typeof RUM_REPLAY_WATCH | UnparsedObject;
export const RUM_REPLAY_WATCH = "rum_replay_watch";
