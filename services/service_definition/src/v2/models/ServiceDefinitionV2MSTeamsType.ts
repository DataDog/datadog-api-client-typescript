import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Contact type.
 */
export type ServiceDefinitionV2MSTeamsType =
  | typeof MICROSOFT_TEAMS
  | UnparsedObject;
export const MICROSOFT_TEAMS = "microsoft-teams";
