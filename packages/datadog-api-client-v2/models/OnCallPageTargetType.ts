/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The kind of target, `team_id` | `team_handle` | `user_id`.
*/

export type OnCallPageTargetType = typeof TEAM_ID| typeof TEAM_HANDLE| typeof USER_ID | UnparsedObject;
export const TEAM_ID = 'team_id';
export const TEAM_HANDLE = 'team_handle';
export const USER_ID = 'user_id';