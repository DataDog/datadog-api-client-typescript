import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Size of the individual graphs in the split.
 */
export type SplitGraphVizSize =
  | typeof XS
  | typeof SM
  | typeof MD
  | typeof LG
  | UnparsedObject;
export const XS = "xs";
export const SM = "sm";
export const MD = "md";
export const LG = "lg";
