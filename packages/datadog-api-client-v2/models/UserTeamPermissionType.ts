/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * User team permission type
 */

export type UserTeamPermissionType =
  | typeof USER_TEAM_PERMISSIONS
  | UnparsedObject;
export const USER_TEAM_PERMISSIONS = "user_team_permissions";
