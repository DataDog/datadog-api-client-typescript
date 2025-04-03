import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The operation to perform
 */
export type SyntheticsPatchTestOperationName =
  | typeof ADD
  | typeof REMOVE
  | typeof REPLACE
  | typeof MOVE
  | typeof COPY
  | typeof TEST
  | UnparsedObject;
export const ADD = "add";
export const REMOVE = "remove";
export const REPLACE = "replace";
export const MOVE = "move";
export const COPY = "copy";
export const TEST = "test";
