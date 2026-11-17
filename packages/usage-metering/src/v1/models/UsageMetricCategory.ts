import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Contains the metric category.
 */
export type UsageMetricCategory =
  | typeof STANDARD
  | typeof CUSTOM
  | UnparsedObject;
export const STANDARD = "standard";
export const CUSTOM = "custom";
