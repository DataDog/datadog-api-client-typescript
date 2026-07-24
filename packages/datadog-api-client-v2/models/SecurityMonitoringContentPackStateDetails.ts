/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringContentPackAppSecDetails } from "./SecurityMonitoringContentPackAppSecDetails";
import { SecurityMonitoringContentPackAuditDetails } from "./SecurityMonitoringContentPackAuditDetails";
import { SecurityMonitoringContentPackEntityDetails } from "./SecurityMonitoringContentPackEntityDetails";
import { SecurityMonitoringContentPackLogsDetails } from "./SecurityMonitoringContentPackLogsDetails";
import { SecurityMonitoringContentPackOnboardingDetails } from "./SecurityMonitoringContentPackOnboardingDetails";
import { SecurityMonitoringContentPackThreatIntelDetails } from "./SecurityMonitoringContentPackThreatIntelDetails";
import { SecurityMonitoringContentPackVulnerabilityDetails } from "./SecurityMonitoringContentPackVulnerabilityDetails";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
