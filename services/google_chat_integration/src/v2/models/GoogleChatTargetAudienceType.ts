import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Google Chat target audience resource type.
 */
export type GoogleChatTargetAudienceType =
  | typeof GOOGLE_CHAT_TARGET_AUDIENCE_TYPE
  | UnparsedObject;
export const GOOGLE_CHAT_TARGET_AUDIENCE_TYPE = "google-chat-target-audience";
