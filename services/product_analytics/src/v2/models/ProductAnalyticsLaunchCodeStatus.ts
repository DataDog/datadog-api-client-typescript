import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the inspected code sends the event, or attaches the property to the event.
 */
export type ProductAnalyticsLaunchCodeStatus =
  | typeof FOUND
  | typeof NOT_FOUND
  | UnparsedObject;
export const FOUND = "found";
export const NOT_FOUND = "not_found";
