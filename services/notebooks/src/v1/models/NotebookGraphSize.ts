import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The size of the graph.
 */
export type NotebookGraphSize =
  | typeof EXTRA_SMALL
  | typeof SMALL
  | typeof MEDIUM
  | typeof LARGE
  | typeof EXTRA_LARGE
  | UnparsedObject;
export const EXTRA_SMALL = "xs";
export const SMALL = "s";
export const MEDIUM = "m";
export const LARGE = "l";
export const EXTRA_LARGE = "xl";
