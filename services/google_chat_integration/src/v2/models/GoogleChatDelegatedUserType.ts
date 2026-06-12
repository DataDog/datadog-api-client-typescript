import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Google Chat delegated user resource type.
 */
export type GoogleChatDelegatedUserType =
  | typeof GOOGLE_CHAT_DELEGATED_USER_TYPE
  | UnparsedObject;
export const GOOGLE_CHAT_DELEGATED_USER_TYPE = "google-chat-delegated-user";
