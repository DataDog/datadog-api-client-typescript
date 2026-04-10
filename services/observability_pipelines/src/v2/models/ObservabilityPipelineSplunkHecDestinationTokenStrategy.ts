import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls how the Splunk HEC token is supplied. Use `custom` to provide a token with `token_key`, or `from_source` to forward the token received from an upstream Splunk HEC source.
 */
export type ObservabilityPipelineSplunkHecDestinationTokenStrategy =
  | typeof CUSTOM
  | typeof FROM_SOURCE
  | UnparsedObject;
export const CUSTOM = "custom";
export const FROM_SOURCE = "from_source";
