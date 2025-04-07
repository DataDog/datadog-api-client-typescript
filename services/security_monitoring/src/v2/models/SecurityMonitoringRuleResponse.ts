import { UnparsedObject } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalRuleResponse } from "./SecurityMonitoringSignalRuleResponse";
import { SecurityMonitoringStandardRuleResponse } from "./SecurityMonitoringStandardRuleResponse";

/**
 * Create a new rule.
 */
export type SecurityMonitoringRuleResponse =
  | SecurityMonitoringStandardRuleResponse
  | SecurityMonitoringSignalRuleResponse
  | UnparsedObject;
