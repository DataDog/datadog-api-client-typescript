import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type for a SentinelOne entity context sync.
 */
export type SecurityMonitoringIntegrationTypeSentinelOne =
  | typeof SENTINELONE
  | UnparsedObject;
export const SENTINELONE = "SENTINELONE";
