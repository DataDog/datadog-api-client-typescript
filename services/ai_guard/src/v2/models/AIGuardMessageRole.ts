import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The role of the message author in the conversation.
 */
export type AIGuardMessageRole =
  | typeof USER
  | typeof ASSISTANT
  | typeof SYSTEM
  | typeof TOOL
  | typeof DEVELOPER
  | UnparsedObject;
export const USER = "user";
export const ASSISTANT = "assistant";
export const SYSTEM = "system";
export const TOOL = "tool";
export const DEVELOPER = "developer";
