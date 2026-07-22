/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The identifier for the action
*/

export type TeamPermissionSettingSerializerAction = typeof MANAGE_MEMBERSHIP| typeof EDIT | UnparsedObject;
export const MANAGE_MEMBERSHIP = 'manage_membership';
export const EDIT = 'edit';