import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Layout type used to apply dashboard-specific widget layout validation.
 */
export type DashboardWidgetValidationLayoutType =
  | typeof ORDERED
  | typeof FREE
  | UnparsedObject;
export const ORDERED = "ordered";
export const FREE = "free";
