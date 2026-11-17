import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident description.
 */
export type EntityResponseIncludedIncidentType =
  | typeof INCIDENT
  | UnparsedObject;
export const INCIDENT = "incident";
