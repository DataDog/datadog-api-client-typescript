/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type TargetFormatType =
  | typeof AUTO
  | typeof STRING
  | typeof INTEGER
  | typeof DOUBLE;
export const AUTO = "auto";
export const STRING = "string";
export const INTEGER = "integer";
export const DOUBLE = "double";
