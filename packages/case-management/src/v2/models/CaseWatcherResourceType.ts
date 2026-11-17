import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type for work item watchers.
 */
export type CaseWatcherResourceType = typeof WATCHER | UnparsedObject;
export const WATCHER = "watcher";
