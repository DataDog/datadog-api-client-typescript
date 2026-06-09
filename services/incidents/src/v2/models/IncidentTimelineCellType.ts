import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of a timeline cell.
 */
export type IncidentTimelineCellType =
  | typeof MARKDOWN
  | typeof INCIDENT_STATUS_CHANGE
  | typeof TIMESTAMP_CHANGE
  | typeof MEETING_SUMMARY
  | typeof MEETING_CHAT
  | typeof ROLE_ASSIGNMENT_CHANGE
  | typeof POSTMORTEM_CHANGE
  | UnparsedObject;
export const MARKDOWN = "markdown";
export const INCIDENT_STATUS_CHANGE = "incident_status_change";
export const TIMESTAMP_CHANGE = "timestamp_change";
export const MEETING_SUMMARY = "meeting_summary";
export const MEETING_CHAT = "meeting_chat";
export const ROLE_ASSIGNMENT_CHANGE = "role_assignment_change";
export const POSTMORTEM_CHANGE = "postmortem_change";
