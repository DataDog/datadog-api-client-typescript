import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Visual size for a `header` block.
 */
export type LLMObsContentBlockHeaderLevel =
  | typeof SM
  | typeof MD
  | typeof LG
  | typeof XL
  | UnparsedObject;
export const SM = "sm";
export const MD = "md";
export const LG = "lg";
export const XL = "xl";
