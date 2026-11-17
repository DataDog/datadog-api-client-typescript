import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of fixed timeframe.
 */
export type DashboardFixedTimeframeType = typeof FIXED | UnparsedObject;
export const FIXED = "fixed";
