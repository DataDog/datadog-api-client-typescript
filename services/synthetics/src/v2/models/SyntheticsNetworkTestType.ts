import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic test, `network`.
 */
export type SyntheticsNetworkTestType = typeof NETWORK | UnparsedObject;
export const NETWORK = "network";
