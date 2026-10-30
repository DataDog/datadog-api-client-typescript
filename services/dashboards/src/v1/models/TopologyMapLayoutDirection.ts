import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Direction of ranks. For example, `top-to-bottom` places first-rank nodes at the top and last-rank nodes at the bottom.
 */
export type TopologyMapLayoutDirection =
  | typeof TOP_TO_BOTTOM
  | typeof BOTTOM_TO_TOP
  | typeof LEFT_TO_RIGHT
  | typeof RIGHT_TO_LEFT
  | UnparsedObject;
export const TOP_TO_BOTTOM = "top-to-bottom";
export const BOTTOM_TO_TOP = "bottom-to-top";
export const LEFT_TO_RIGHT = "left-to-right";
export const RIGHT_TO_LEFT = "right-to-left";
