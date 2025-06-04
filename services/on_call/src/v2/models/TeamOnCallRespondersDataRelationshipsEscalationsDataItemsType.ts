import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifies the resource type for escalation policy steps linked to a team's on-call configuration.
 */
export type TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType =
  | typeof ESCALATION_POLICY_STEPS
  | UnparsedObject;
export const ESCALATION_POLICY_STEPS = "escalation_policy_steps";
