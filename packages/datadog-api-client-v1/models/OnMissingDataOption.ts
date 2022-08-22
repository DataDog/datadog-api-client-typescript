/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type OnMissingDataOption =
  | typeof DEFAULT
  | typeof SHOW_NO_DATA
  | typeof SHOW_AND_NOTIFY_NO_DATA
  | typeof RESOLVE;
export const DEFAULT = "default";
export const SHOW_NO_DATA = "show_no_data";
export const SHOW_AND_NOTIFY_NO_DATA = "show_and_notify_no_data";
export const RESOLVE = "resolve";
