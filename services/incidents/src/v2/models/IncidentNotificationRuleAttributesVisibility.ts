import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The visibility of the notification rule.
 */
export type IncidentNotificationRuleAttributesVisibility =
  | typeof ALL
  | typeof ORGANIZATION
  | typeof PRIVATE
  | UnparsedObject;
export const ALL = "all";
export const ORGANIZATION = "organization";
export const PRIVATE = "private";
