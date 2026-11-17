import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * On-call page resource type.
 */
export type IncidentOnCallPageType = typeof PAGE | UnparsedObject;
export const PAGE = "page";
