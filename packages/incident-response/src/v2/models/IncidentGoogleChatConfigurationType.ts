import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Google Chat configuration resource type.
 */
export type IncidentGoogleChatConfigurationType =
  | typeof GOOGLE_CHAT_CONFIGURATIONS
  | UnparsedObject;
export const GOOGLE_CHAT_CONFIGURATIONS = "google_chat_configurations";
