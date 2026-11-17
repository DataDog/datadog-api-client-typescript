import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident handle resource type
 */
export type IncidentHandleType = typeof INCIDENTS_HANDLES | UnparsedObject;
export const INCIDENTS_HANDLES = "incidents_handles";
