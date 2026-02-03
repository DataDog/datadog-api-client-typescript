import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Rum replay watcher resource type.
 */
export type WatcherDataType = typeof RUM_REPLAY_WATCHER | UnparsedObject;
export const RUM_REPLAY_WATCHER = "rum_replay_watcher";
