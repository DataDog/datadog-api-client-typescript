/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of `SyntheticsMobileTestOptionsMonitorOptionsNotificationPresetName` object.
 */

export type SyntheticsMobileTestOptionsMonitorOptionsNotificationPresetName =
  | typeof SHOW_ALL
  | typeof HIDE_ALL
  | typeof HIDE_QUERY
  | typeof HIDE_HANDLES
  | UnparsedObject;
export const SHOW_ALL = "show_all";
export const HIDE_ALL = "hide_all";
export const HIDE_QUERY = "hide_query";
export const HIDE_HANDLES = "hide_handles";
