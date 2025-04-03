import { UnparsedObject } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalRulePayload } from "./SecurityMonitoringSignalRulePayload";
import { SecurityMonitoringStandardRulePayload } from "./SecurityMonitoringStandardRulePayload";

/**
 * Convert a rule from JSON to Terraform.
 */
export type SecurityMonitoringRuleConvertPayload =
  | SecurityMonitoringStandardRulePayload
  | SecurityMonitoringSignalRulePayload
  | UnparsedObject;
