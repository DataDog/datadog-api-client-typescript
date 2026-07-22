/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The type of external source that provides entities to Cloud SIEM.
*/

export type SecurityMonitoringIntegrationType = typeof GOOGLE_WORKSPACE| typeof OKTA| typeof ENTRA_ID| typeof CROWDSTRIKE| typeof SENTINELONE | UnparsedObject;
export const GOOGLE_WORKSPACE = 'GOOGLE_WORKSPACE';
export const OKTA = 'OKTA';
export const ENTRA_ID = 'ENTRA_ID';
export const CROWDSTRIKE = 'CROWDSTRIKE';
export const SENTINELONE = 'SENTINELONE';