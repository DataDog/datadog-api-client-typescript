import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Event category identifying the type of event.
 */
export type EventSystemAttributesCategory =
  | typeof CHANGE
  | typeof ALERT
  | UnparsedObject;
export const CHANGE = "change";
export const ALERT = "alert";
