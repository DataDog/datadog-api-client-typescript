import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether this operation adds a new mapping or removes an existing one.
 */
export type TeamsOwnershipMappingBatchOperationOp =
  | typeof ADD
  | typeof REMOVE
  | UnparsedObject;
export const ADD = "add";
export const REMOVE = "remove";
