import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. Must be `event_emails`.
 */
export type EventEmailAddressResourceType =
  | typeof EVENT_EMAILS
  | UnparsedObject;
export const EVENT_EMAILS = "event_emails";
