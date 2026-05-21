import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Microsoft Teams configuration resource type.
 */
export type IncidentMicrosoftTeamsConfigurationType =
  | typeof MICROSOFT_TEAMS_CONFIGURATIONS
  | UnparsedObject;
export const MICROSOFT_TEAMS_CONFIGURATIONS = "microsoft_teams_configurations";
