import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The external source platform for team synchronization. Only "github" is supported.
 */
export type TeamSyncAttributesSource = typeof GITHUB | UnparsedObject;
export const GITHUB = "github";
