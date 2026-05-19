import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for case watchers.
 */
export type CaseWatcherResourceType = typeof WATCHER | UnparsedObject;
export const WATCHER = "watcher";
