import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * On-call page resource type.
 */
export type IncidentOnCallPageType = typeof PAGE | UnparsedObject;
export const PAGE = "page";
