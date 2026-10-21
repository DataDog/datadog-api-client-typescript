import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The external source platform for team synchronization.
 */
export type TeamSyncAttributesSource =
  | typeof GITHUB
  | typeof SERVICENOW
  | UnparsedObject;
export const GITHUB = "github";
export const SERVICENOW = "servicenow";
