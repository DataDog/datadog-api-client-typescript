import { UnparsedObject } from "@datadog/datadog-api-client";

import { CloudConfigurationRuleCreatePayload } from "./CloudConfigurationRuleCreatePayload";
import { SecurityMonitoringSignalRuleCreatePayload } from "./SecurityMonitoringSignalRuleCreatePayload";
import { SecurityMonitoringStandardRuleCreatePayload } from "./SecurityMonitoringStandardRuleCreatePayload";

/**
 * Create a new rule.
 */
export type SecurityMonitoringRuleCreatePayload =
  | SecurityMonitoringStandardRuleCreatePayload
  | SecurityMonitoringSignalRuleCreatePayload
  | CloudConfigurationRuleCreatePayload
  | UnparsedObject;
