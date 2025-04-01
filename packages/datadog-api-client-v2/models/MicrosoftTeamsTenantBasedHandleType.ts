/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Specifies the tenant-based handle resource type.
*/

export type MicrosoftTeamsTenantBasedHandleType = typeof TENANT_BASED_HANDLE | UnparsedObject;
export const TENANT_BASED_HANDLE = 'tenant-based-handle';