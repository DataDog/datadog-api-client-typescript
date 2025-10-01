/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of page target for incident pages.
 */

export type IncidentPageTargetType =
  | typeof TEAM_HANDLE
  | typeof TEAM_UUID
  | typeof USER_UUID
  | UnparsedObject;
export const TEAM_HANDLE = "team_handle";
export const TEAM_UUID = "team_uuid";
export const USER_UUID = "user_uuid";
