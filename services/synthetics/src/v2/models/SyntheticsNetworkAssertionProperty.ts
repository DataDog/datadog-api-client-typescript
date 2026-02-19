import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The associated assertion property.
 */
export type SyntheticsNetworkAssertionProperty =
  | typeof AVG
  | typeof MAX
  | typeof MIN
  | UnparsedObject;
export const AVG = "avg";
export const MAX = "max";
export const MIN = "min";
