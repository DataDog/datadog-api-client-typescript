import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The processor type. The value should always be `filter`.
 */
export type ObservabilityPipelineFilterProcessorType =
  | typeof FILTER
  | UnparsedObject;
export const FILTER = "filter";
