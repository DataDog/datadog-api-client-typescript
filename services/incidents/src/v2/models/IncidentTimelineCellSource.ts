import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source of a timeline cell.
 */
export type IncidentTimelineCellSource =
  | typeof SLACK
  | typeof MICROSOFT_TEAMS
  | typeof DATADOG
  | typeof API
  | UnparsedObject;
export const SLACK = "slack";
export const MICROSOFT_TEAMS = "microsoft_teams";
export const DATADOG = "datadog";
export const API = "api";
