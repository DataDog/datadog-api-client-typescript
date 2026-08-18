import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reflow behavior used for an ordered dashboard.
 */
export type DashboardWidgetValidationReflowType =
  | typeof AUTO
  | typeof FIXED
  | UnparsedObject;
export const AUTO = "auto";
export const FIXED = "fixed";
