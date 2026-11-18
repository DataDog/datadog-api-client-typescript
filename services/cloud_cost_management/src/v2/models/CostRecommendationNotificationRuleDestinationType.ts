import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Where the digest is sent. `slack` requires `workspace_id` and `channel_id`; `teams` requires the
 * `teams_*` attributes. Defaults to `slack`.
 */
export type CostRecommendationNotificationRuleDestinationType =
  | typeof SLACK
  | typeof TEAMS
  | UnparsedObject;
export const SLACK = "slack";
export const TEAMS = "teams";
