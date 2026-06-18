import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the actor is a user or the Datadog system.
 */
export type AutomationRuleActorType =
  | typeof USER
  | typeof SYSTEM
  | UnparsedObject;
export const USER = "user";
export const SYSTEM = "system";
