import { UnparsedObject } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalRuleQuery } from "./SecurityMonitoringSignalRuleQuery";
import { SecurityMonitoringStandardRuleQuery } from "./SecurityMonitoringStandardRuleQuery";

/**
 * Query for matching rule.
 */
export type SecurityMonitoringRuleQuery =
  | SecurityMonitoringStandardRuleQuery
  | SecurityMonitoringSignalRuleQuery
  | UnparsedObject;
