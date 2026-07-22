/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringOktaIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringOktaIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The credentials to validate against the external entity source.
*/

export type SecurityMonitoringIntegrationCredentialsValidateAttributes = SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes | SecurityMonitoringOktaIntegrationCredentialsValidateAttributes | SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes | SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes | SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes | UnparsedObject;