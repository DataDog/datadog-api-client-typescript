import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringOktaIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringOktaIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes";

/**
 * The credentials to validate against the external entity source.
 */
export type SecurityMonitoringIntegrationCredentialsValidateAttributes =
  | SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes
  | SecurityMonitoringOktaIntegrationCredentialsValidateAttributes
  | SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes
  | SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes
  | SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes
  | UnparsedObject;
