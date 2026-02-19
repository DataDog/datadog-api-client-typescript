import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of response, `network_test`.
 */
export type SyntheticsNetworkTestResponseType =
  | typeof NETWORK_TEST
  | UnparsedObject;
export const NETWORK_TEST = "network_test";
