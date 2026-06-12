import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Google Chat organization resource type.
 */
export type GoogleChatOrganizationType =
  | typeof GOOGLE_CHAT_ORGANIZATION_TYPE
  | UnparsedObject;
export const GOOGLE_CHAT_ORGANIZATION_TYPE = "google-chat-organization";
