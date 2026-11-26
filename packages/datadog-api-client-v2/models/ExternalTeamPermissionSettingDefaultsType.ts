/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Resource type for external team permission setting defaults.
 */

export type ExternalTeamPermissionSettingDefaultsType =
  | typeof EXTERNAL_TEAM_PERMISSION_SETTING_DEFAULTS
  | UnparsedObject;
export const EXTERNAL_TEAM_PERMISSION_SETTING_DEFAULTS =
  "external_team_permission_setting_defaults";
