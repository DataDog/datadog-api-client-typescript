import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The rule type.
 */
export type SecurityMonitoringSignalRuleType =
  | typeof SIGNAL_CORRELATION
  | UnparsedObject;
export const SIGNAL_CORRELATION = "signal_correlation";
