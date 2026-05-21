import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident status pages suggestion resource type.
 */
export type IncidentStatusPagesSuggestionType =
  | typeof INCIDENT_STATUSPAGES_SUGGESTION
  | UnparsedObject;
export const INCIDENT_STATUSPAGES_SUGGESTION =
  "incident_statuspages_suggestion";
