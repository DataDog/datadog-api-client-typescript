import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of gRPC call to perform.
 */
export type SyntheticsTestCallType =
  | typeof HEALTHCHECK
  | typeof UNARY
  | UnparsedObject;
export const HEALTHCHECK = "healthcheck";
export const UNARY = "unary";
