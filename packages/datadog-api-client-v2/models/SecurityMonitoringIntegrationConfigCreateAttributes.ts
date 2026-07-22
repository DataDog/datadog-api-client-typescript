/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes";
import { SecurityMonitoringEntraIdIntegrationConfigCreateAttributes } from "./SecurityMonitoringEntraIdIntegrationConfigCreateAttributes";
import { SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes";
import { SecurityMonitoringOktaIntegrationConfigCreateAttributes } from "./SecurityMonitoringOktaIntegrationConfigCreateAttributes";
import { SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes } from "./SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The attributes of the entity context sync configuration to create.
*/

export type SecurityMonitoringIntegrationConfigCreateAttributes = SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes | SecurityMonitoringOktaIntegrationConfigCreateAttributes | SecurityMonitoringEntraIdIntegrationConfigCreateAttributes | SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes | SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes | UnparsedObject;