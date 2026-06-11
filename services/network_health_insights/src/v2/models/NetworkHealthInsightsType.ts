import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for network health insights. Always `network-health-insights`.
 */
export type NetworkHealthInsightsType =
  | typeof NETWORK_HEALTH_INSIGHTS
  | UnparsedObject;
export const NETWORK_HEALTH_INSIGHTS = "network-health-insights";
