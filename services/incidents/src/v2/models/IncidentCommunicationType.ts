import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident communication resource type.
 */
export type IncidentCommunicationType = typeof COMMUNICATION | UnparsedObject;
export const COMMUNICATION = "communication";
