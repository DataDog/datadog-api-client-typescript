import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Response format of a custom topology map request.
 */
export type TopologyRequestCustomResponseFormat =
  | typeof SCALAR
  | UnparsedObject;
export const SCALAR = "scalar";
