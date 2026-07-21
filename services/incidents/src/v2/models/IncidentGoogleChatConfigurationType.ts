import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Google Chat configuration resource type.
 */
export type IncidentGoogleChatConfigurationType =
  | typeof GOOGLE_CHAT_CONFIGURATIONS
  | UnparsedObject;
export const GOOGLE_CHAT_CONFIGURATIONS = "google_chat_configurations";
