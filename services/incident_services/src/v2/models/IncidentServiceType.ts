import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident service resource type.
 */
export type IncidentServiceType = typeof SERVICES | UnparsedObject;
export const SERVICES = "services";
