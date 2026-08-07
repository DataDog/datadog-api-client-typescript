import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The telemetry source that a tag rule applies to.
 */
export type TagRuleSource =
  | typeof LOGS
  | typeof SPANS
  | typeof METRICS
  | UnparsedObject;
export const LOGS = "logs";
export const SPANS = "spans";
export const METRICS = "metrics";
