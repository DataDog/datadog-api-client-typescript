import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type identifier for a monitor rule.
 */
export type DeploymentGatesMonitorRuleType = typeof MONITOR | UnparsedObject;
export const MONITOR = "monitor";
