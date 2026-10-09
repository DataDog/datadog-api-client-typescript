import { UnparsedObject } from "@datadog/datadog-api-client";

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
