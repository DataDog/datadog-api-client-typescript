import { UnparsedObject } from "@datadog/datadog-api-client";

import { SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes";
import { SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes } from "./SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes";
import { SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes";
import { SecurityMonitoringOktaIntegrationConfigUpdateAttributes } from "./SecurityMonitoringOktaIntegrationConfigUpdateAttributes";
import { SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes } from "./SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes";

/**
 * Fields to update on the entity context sync configuration. All fields other than the integration type are optional.
 */
export type SecurityMonitoringIntegrationConfigUpdateAttributes =
  | SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes
  | SecurityMonitoringOktaIntegrationConfigUpdateAttributes
  | SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes
  | SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes
  | SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes
  | UnparsedObject;
