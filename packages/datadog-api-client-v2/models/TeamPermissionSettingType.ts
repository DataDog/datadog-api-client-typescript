/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Team permission setting type
 */

export type TeamPermissionSettingType =
  | typeof TEAM_PERMISSION_SETTINGS
  | UnparsedObject;
export const TEAM_PERMISSION_SETTINGS = "team_permission_settings";
