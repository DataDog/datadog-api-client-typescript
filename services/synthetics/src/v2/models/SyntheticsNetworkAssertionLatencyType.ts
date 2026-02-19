import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the latency assertion.
 */
export type SyntheticsNetworkAssertionLatencyType =
  | typeof LATENCY
  | UnparsedObject;
export const LATENCY = "latency";
