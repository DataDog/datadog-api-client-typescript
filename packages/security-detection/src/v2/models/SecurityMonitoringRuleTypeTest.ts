import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The rule type.
 */
export type SecurityMonitoringRuleTypeTest =
  | typeof LOG_DETECTION
  | UnparsedObject;
export const LOG_DETECTION = "log_detection";
