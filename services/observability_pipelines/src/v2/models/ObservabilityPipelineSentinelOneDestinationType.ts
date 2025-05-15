import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `sentinel_one`.
 */
export type ObservabilityPipelineSentinelOneDestinationType =
  | typeof SENTINEL_ONE
  | UnparsedObject;
export const SENTINEL_ONE = "sentinel_one";
