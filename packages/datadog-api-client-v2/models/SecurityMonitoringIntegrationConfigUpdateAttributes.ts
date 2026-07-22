/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes";
import { SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes } from "./SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes";
import { SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes";
import { SecurityMonitoringOktaIntegrationConfigUpdateAttributes } from "./SecurityMonitoringOktaIntegrationConfigUpdateAttributes";
import { SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes } from "./SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Fields to update on the entity context sync configuration. All fields other than the integration type are optional.
*/

export type SecurityMonitoringIntegrationConfigUpdateAttributes = SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes | SecurityMonitoringOktaIntegrationConfigUpdateAttributes | SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes | SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes | SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes | UnparsedObject;