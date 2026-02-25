import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Override the query execution strategy.
 */
export type ProductAnalyticsExecutionType =
  | typeof SIMPLE
  | typeof BACKGROUND
  | typeof TRINO_MULTISTEP
  | typeof MATERIALIZED_VIEW
  | UnparsedObject;
export const SIMPLE = "simple";
export const BACKGROUND = "background";
export const TRINO_MULTISTEP = "trino-multistep";
export const MATERIALIZED_VIEW = "materialized-view";
