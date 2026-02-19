import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the jitter assertion.
 */
export type SyntheticsNetworkAssertionJitterType =
  | typeof JITTER
  | UnparsedObject;
export const JITTER = "jitter";
