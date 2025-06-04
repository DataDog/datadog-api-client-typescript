import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Represents the resource type for users assigned as responders in an escalation step.
 */
export type EscalationRelationshipsRespondersDataItemsType =
  | typeof USERS
  | UnparsedObject;
export const USERS = "users";
