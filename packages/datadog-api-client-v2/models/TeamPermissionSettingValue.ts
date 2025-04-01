/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * What type of user is allowed to perform the specified action
*/

export type TeamPermissionSettingValue = typeof ADMINS| typeof MEMBERS| typeof ORGANIZATION| typeof USER_ACCESS_MANAGE| typeof TEAMS_MANAGE | UnparsedObject;
export const ADMINS = 'admins';
export const MEMBERS = 'members';
export const ORGANIZATION = 'organization';
export const USER_ACCESS_MANAGE = 'user_access_manage';
export const TEAMS_MANAGE = 'teams_manage';