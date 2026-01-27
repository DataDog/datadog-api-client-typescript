import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Watcher resource type
 */
export type WatcherResourceType = typeof WATCHER | UnparsedObject;
export const WATCHER = "watcher";
