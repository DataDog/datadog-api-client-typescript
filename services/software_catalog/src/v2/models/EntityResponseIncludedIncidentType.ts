import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident description.
 */
export type EntityResponseIncludedIncidentType =
  | typeof INCIDENT
  | UnparsedObject;
export const INCIDENT = "incident";
