import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The decoding format used to interpret incoming logs.
 */
export type ObservabilityPipelineDecoding =
  | typeof DECODE_BYTES
  | typeof DECODE_GELF
  | typeof DECODE_JSON
  | typeof DECODE_SYSLOG
  | UnparsedObject;
export const DECODE_BYTES = "bytes";
export const DECODE_GELF = "gelf";
export const DECODE_JSON = "json";
export const DECODE_SYSLOG = "syslog";
