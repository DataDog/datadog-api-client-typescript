import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { SecurityMonitoringStandardRuleTestPayload } from "./SecurityMonitoringStandardRuleTestPayload";

/**
 * Test a rule.
 */
export type SecurityMonitoringRuleTestPayload =
  | SecurityMonitoringStandardRuleTestPayload
  | UnparsedObject;
