import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for DORA incident events.
 */
export type DORAIncidentType = typeof DORA_INCIDENT | UnparsedObject;
export const DORA_INCIDENT = "dora_incident";
