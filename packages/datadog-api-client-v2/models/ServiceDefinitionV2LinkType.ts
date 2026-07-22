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

export type ServiceDefinitionV2LinkType = typeof DOC| typeof WIKI| typeof RUNBOOK| typeof URL| typeof REPO| typeof DASHBOARD| typeof ONCALL| typeof CODE| typeof LINK | UnparsedObject;
export const DOC = 'doc';
export const WIKI = 'wiki';
export const RUNBOOK = 'runbook';
export const URL = 'url';
export const REPO = 'repo';
export const DASHBOARD = 'dashboard';
export const ONCALL = 'oncall';
export const CODE = 'code';
export const LINK = 'link';