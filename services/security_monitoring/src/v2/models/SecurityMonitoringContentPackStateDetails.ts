import { UnparsedObject } from "@datadog/datadog-api-client";

import { SecurityMonitoringContentPackAppSecDetails } from "./SecurityMonitoringContentPackAppSecDetails";
import { SecurityMonitoringContentPackAuditDetails } from "./SecurityMonitoringContentPackAuditDetails";
import { SecurityMonitoringContentPackEntityDetails } from "./SecurityMonitoringContentPackEntityDetails";
import { SecurityMonitoringContentPackLogsDetails } from "./SecurityMonitoringContentPackLogsDetails";
import { SecurityMonitoringContentPackOnboardingDetails } from "./SecurityMonitoringContentPackOnboardingDetails";
import { SecurityMonitoringContentPackThreatIntelDetails } from "./SecurityMonitoringContentPackThreatIntelDetails";
import { SecurityMonitoringContentPackVulnerabilityDetails } from "./SecurityMonitoringContentPackVulnerabilityDetails";

/**
 * Type-specific details for a content pack state. The set of fields present depends
 * on the content pack's `type`. When Cloud SIEM is inactive for the requesting organization, `onboarding` is returned instead of the content pack's usual type, such as `logs` or `vulnerability`.`
 */
export type SecurityMonitoringContentPackStateDetails =
  | SecurityMonitoringContentPackLogsDetails
  | SecurityMonitoringContentPackThreatIntelDetails
  | SecurityMonitoringContentPackEntityDetails
  | SecurityMonitoringContentPackAuditDetails
  | SecurityMonitoringContentPackAppSecDetails
  | SecurityMonitoringContentPackVulnerabilityDetails
  | SecurityMonitoringContentPackOnboardingDetails
  | UnparsedObject;
