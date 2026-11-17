import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The visibility of the incident.
 */
export type IncidentImportVisibility =
  | typeof ORGANIZATION
  | typeof PRIVATE
  | UnparsedObject;
export const ORGANIZATION = "organization";
export const PRIVATE = "private";
