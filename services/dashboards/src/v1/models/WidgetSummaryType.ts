import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Which summary type should be used.
 */
export type WidgetSummaryType =
  | typeof MONITORS
  | typeof GROUPS
  | typeof COMBINED
  | UnparsedObject;
export const MONITORS = "monitors";
export const GROUPS = "groups";
export const COMBINED = "combined";
