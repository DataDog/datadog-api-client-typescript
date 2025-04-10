import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Unit for quota enforcement in bytes for data size or events for count.
 */
export type ObservabilityPipelineQuotaProcessorLimitEnforceType =
  | typeof BYTES
  | typeof EVENTS
  | UnparsedObject;
export const BYTES = "bytes";
export const EVENTS = "events";
