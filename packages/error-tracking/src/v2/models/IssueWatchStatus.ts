import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Status of the watch.
 */
export type IssueWatchStatus = typeof ACTIVE | UnparsedObject;
export const ACTIVE = "ACTIVE";
