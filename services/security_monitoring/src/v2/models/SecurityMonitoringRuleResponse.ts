import { UnparsedObject } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalRuleResponse } from "./SecurityMonitoringSignalRuleResponse";
import { SecurityMonitoringStandardRuleResponse } from "./SecurityMonitoringStandardRuleResponse";

/**
 * A security monitoring rule.
 */
export type SecurityMonitoringRuleResponse =
  | SecurityMonitoringStandardRuleResponse
  | SecurityMonitoringSignalRuleResponse
  | UnparsedObject;
