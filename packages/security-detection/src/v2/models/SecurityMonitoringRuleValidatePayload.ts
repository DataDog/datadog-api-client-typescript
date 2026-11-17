import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CloudConfigurationRulePayload } from "./CloudConfigurationRulePayload";
import { SecurityMonitoringSignalRulePayload } from "./SecurityMonitoringSignalRulePayload";
import { SecurityMonitoringStandardRulePayload } from "./SecurityMonitoringStandardRulePayload";

/**
 * Validate a rule.
 */
export type SecurityMonitoringRuleValidatePayload =
  | SecurityMonitoringStandardRulePayload
  | SecurityMonitoringSignalRulePayload
  | CloudConfigurationRulePayload
  | UnparsedObject;
