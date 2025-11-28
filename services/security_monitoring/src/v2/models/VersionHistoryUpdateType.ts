import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of change.
 */
export type VersionHistoryUpdateType =
  | typeof CREATE
  | typeof UPDATE
  | typeof DELETE
  | UnparsedObject;
export const CREATE = "create";
export const UPDATE = "update";
export const DELETE = "delete";
