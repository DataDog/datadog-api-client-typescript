import { UnparsedObject } from "@datadog/datadog-api-client";

import { SecurityMonitoringStandardRuleTestPayload } from "./SecurityMonitoringStandardRuleTestPayload";

/**
 * Test a rule.
 */
export type SecurityMonitoringRuleTestPayload =
  | SecurityMonitoringStandardRuleTestPayload
  | UnparsedObject;
