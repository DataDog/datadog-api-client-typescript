import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type for work item views.
 */
export type CaseViewResourceType = typeof VIEW | UnparsedObject;
export const VIEW = "view";
