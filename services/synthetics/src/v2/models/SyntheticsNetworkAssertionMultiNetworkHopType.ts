import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the multi-network hop assertion.
 */
export type SyntheticsNetworkAssertionMultiNetworkHopType =
  | typeof MULTI_NETWORK_HOP
  | UnparsedObject;
export const MULTI_NETWORK_HOP = "multiNetworkHop";
