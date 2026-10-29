import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Scheduled action resource type.
 */
export type OnCallPageScheduledActionType =
  | typeof SCHEDULED_ACTIONS
  | UnparsedObject;
export const SCHEDULED_ACTIONS = "scheduled_actions";
