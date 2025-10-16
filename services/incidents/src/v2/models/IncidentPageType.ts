import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident page type.
 */
export type IncidentPageType = typeof PAGE | UnparsedObject;
export const PAGE = "page";
