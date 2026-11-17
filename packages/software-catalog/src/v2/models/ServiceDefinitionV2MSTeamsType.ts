import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Contact type.
 */
export type ServiceDefinitionV2MSTeamsType =
  | typeof MICROSOFT_TEAMS
  | UnparsedObject;
export const MICROSOFT_TEAMS = "microsoft-teams";
