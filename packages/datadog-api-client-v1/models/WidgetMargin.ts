/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Size of the margins around the image.
 * **Note**: `small` and `large` values are deprecated.
 */

export type WidgetMargin =
  | typeof SM
  | typeof MD
  | typeof LG
  | typeof SMALL
  | typeof LARGE
  | UnparsedObject;
export const SM = "sm";
export const MD = "md";
export const LG = "lg";
export const SMALL = "small";
export const LARGE = "large";
