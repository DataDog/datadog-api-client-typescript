import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident timeline entry resource type.
 */
export type IncidentTimelineEntryType =
  | typeof INCIDENT_TIMELINE_CELLS
  | UnparsedObject;
export const INCIDENT_TIMELINE_CELLS = "incident_timeline_cells";
