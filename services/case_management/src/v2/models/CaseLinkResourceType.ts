import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for work item links.
 */
export type CaseLinkResourceType = typeof LINK | UnparsedObject;
export const LINK = "link";
