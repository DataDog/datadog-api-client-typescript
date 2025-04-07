import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of change.
 */
export type RuleVersionUpdateType =
  | typeof CREATE
  | typeof UPDATE
  | typeof DELETE
  | UnparsedObject;
export const CREATE = "create";
export const UPDATE = "update";
export const DELETE = "delete";
