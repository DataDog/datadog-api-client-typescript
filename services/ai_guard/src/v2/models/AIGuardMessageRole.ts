import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The role of the message author in the conversation.
 */
export type AIGuardMessageRole =
  | typeof USER
  | typeof ASSISTANT
  | typeof SYSTEM
  | typeof DEVELOPER
  | typeof TOOL
  | UnparsedObject;
export const USER = "user";
export const ASSISTANT = "assistant";
export const SYSTEM = "system";
export const DEVELOPER = "developer";
export const TOOL = "tool";
