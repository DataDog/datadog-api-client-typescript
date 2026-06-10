import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the notification preview response.
 */
export type NotificationRulePreviewResponseType =
  | typeof NOTIFICATION_PREVIEW_RESPONSE
  | UnparsedObject;
export const NOTIFICATION_PREVIEW_RESPONSE = "notification_preview_response";
