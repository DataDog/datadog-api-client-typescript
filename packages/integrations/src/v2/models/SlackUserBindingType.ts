import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Slack user binding resource type.
 */
export type SlackUserBindingType = typeof TEAM_ID | UnparsedObject;
export const TEAM_ID = "team_id";
