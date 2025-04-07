import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Define how you want the SLO to be displayed.
 */
export type WidgetViewMode =
  | typeof OVERALL
  | typeof COMPONENT
  | typeof BOTH
  | UnparsedObject;
export const OVERALL = "overall";
export const COMPONENT = "component";
export const BOTH = "both";
