import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Byte frames according to the octet counting format as per RFC6587.
 */
export type ObservabilityPipelineSocketSourceFramingOctetCountingMethod =
  | typeof OCTET_COUNTING
  | UnparsedObject;
export const OCTET_COUNTING = "octet_counting";
