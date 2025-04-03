import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The direction of the scroll for a `scrollToElement` step type.
 */
export type SyntheticsMobileStepParamsDirection =
  | typeof UP
  | typeof DOWN
  | typeof LEFT
  | typeof RIGHT
  | UnparsedObject;
export const UP = "up";
export const DOWN = "down";
export const LEFT = "left";
export const RIGHT = "right";
