import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of `ActionConnectionDataType` object.
 */
export type ActionConnectionDataType =
  | typeof ACTION_CONNECTION
  | UnparsedObject;
export const ACTION_CONNECTION = "action_connection";
