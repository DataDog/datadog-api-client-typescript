import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The role of the message sender.
 */
export type ChatMessageRole =
  | typeof USER
  | typeof ASSISTANT
  | typeof SYSTEM
  | UnparsedObject;
export const USER = "user";
export const ASSISTANT = "assistant";
export const SYSTEM = "system";
