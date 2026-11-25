import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SloWidgetViewMode =
  | typeof OVERALL
  | typeof BOTH
  | typeof COMPONENT
  | UnparsedObject;
export const OVERALL = "overall";
export const BOTH = "both";
export const COMPONENT = "component";
