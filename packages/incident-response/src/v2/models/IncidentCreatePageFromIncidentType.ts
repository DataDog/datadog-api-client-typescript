import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type for a page creation request.
 */
export type IncidentCreatePageFromIncidentType = typeof PAGE | UnparsedObject;
export const PAGE = "page";
