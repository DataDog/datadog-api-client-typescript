/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Link type.
*/

export type ServiceDefinitionV2Dot1LinkType = typeof DOC| typeof REPO| typeof RUNBOOK| typeof DASHBOARD| typeof OTHER | UnparsedObject;
export const DOC = 'doc';
export const REPO = 'repo';
export const RUNBOOK = 'runbook';
export const DASHBOARD = 'dashboard';
export const OTHER = 'other';