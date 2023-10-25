/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Supported teams field.
 */

export type TeamsField =
  | typeof ID
  | typeof NAME
  | typeof HANDLE
  | typeof SUMMARY
  | typeof DESCRIPTION
  | typeof AVATAR
  | typeof BANNER
  | typeof VISIBLE_MODULES
  | typeof HIDDEN_MODULES
  | typeof CREATED_AT
  | typeof MODIFIED_AT
  | typeof USER_COUNT
  | typeof LINK_COUNT
  | typeof TEAM_LINKS
  | typeof USER_TEAM_PERMISSIONS
  | UnparsedObject;
export const ID = "id";
export const NAME = "name";
export const HANDLE = "handle";
export const SUMMARY = "summary";
export const DESCRIPTION = "description";
export const AVATAR = "avatar";
export const BANNER = "banner";
export const VISIBLE_MODULES = "visible_modules";
export const HIDDEN_MODULES = "hidden_modules";
export const CREATED_AT = "created_at";
export const MODIFIED_AT = "modified_at";
export const USER_COUNT = "user_count";
export const LINK_COUNT = "link_count";
export const TEAM_LINKS = "team_links";
export const USER_TEAM_PERMISSIONS = "user_team_permissions";
