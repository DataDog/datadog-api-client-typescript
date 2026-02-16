import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The role of the message sender.
 */
export type ChatHistoryItemRole =
  | typeof USER
  | typeof ASSISTANT
  | UnparsedObject;
export const USER = "user";
export const ASSISTANT = "assistant";
