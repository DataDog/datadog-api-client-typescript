/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Width of the label column.
 */

export type HeatgridLabelColumnWidth =
  | typeof XS
  | typeof S
  | typeof M
  | typeof L
  | typeof XL
  | UnparsedObject;
export const XS = "xs";
export const S = "s";
export const M = "m";
export const L = "l";
export const XL = "xl";
