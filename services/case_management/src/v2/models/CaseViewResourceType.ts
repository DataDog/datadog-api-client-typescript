import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for case views.
 */
export type CaseViewResourceType = typeof VIEW | UnparsedObject;
export const VIEW = "view";
