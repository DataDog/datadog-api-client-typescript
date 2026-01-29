import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident resource type
 */
export type IncidentResourceType = typeof INCIDENTS | UnparsedObject;
export const INCIDENTS = "incidents";
