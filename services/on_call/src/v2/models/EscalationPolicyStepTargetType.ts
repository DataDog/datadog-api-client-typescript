import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the type of escalation target (example `users`, `schedules`, or `teams`).
 */
export type EscalationPolicyStepTargetType =
  | typeof USERS
  | typeof SCHEDULES
  | typeof TEAMS
  | UnparsedObject;
export const USERS = "users";
export const SCHEDULES = "schedules";
export const TEAMS = "teams";
