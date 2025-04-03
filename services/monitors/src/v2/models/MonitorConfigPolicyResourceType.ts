import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Monitor configuration policy resource type.
 */
export type MonitorConfigPolicyResourceType =
  | typeof MONITOR_CONFIG_POLICY
  | UnparsedObject;
export const MONITOR_CONFIG_POLICY = "monitor-config-policy";
