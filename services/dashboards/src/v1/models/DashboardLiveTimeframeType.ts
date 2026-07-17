import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of live timeframe.
 */
export type DashboardLiveTimeframeType = typeof LIVE | UnparsedObject;
export const LIVE = "live";
