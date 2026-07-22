/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The owner type for an ownership inference.
*/

export type OwnershipOwnerType = typeof USER| typeof TEAM| typeof SERVICE| typeof UNKNOWN | UnparsedObject;
export const USER = 'user';
export const TEAM = 'team';
export const SERVICE = 'service';
export const UNKNOWN = 'unknown';