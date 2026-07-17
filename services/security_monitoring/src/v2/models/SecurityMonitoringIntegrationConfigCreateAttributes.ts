import { UnparsedObject } from "@datadog/datadog-api-client";

import { SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes";
import { SecurityMonitoringEntraIdIntegrationConfigCreateAttributes } from "./SecurityMonitoringEntraIdIntegrationConfigCreateAttributes";
import { SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes";
import { SecurityMonitoringOktaIntegrationConfigCreateAttributes } from "./SecurityMonitoringOktaIntegrationConfigCreateAttributes";
import { SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes } from "./SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes";

/**
 * The attributes of the entity context sync configuration to create.
 */
export type SecurityMonitoringIntegrationConfigCreateAttributes =
  | SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes
  | SecurityMonitoringOktaIntegrationConfigCreateAttributes
  | SecurityMonitoringEntraIdIntegrationConfigCreateAttributes
  | SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes
  | SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes
  | UnparsedObject;
