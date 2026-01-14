import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `split_array`.
 */
export type ObservabilityPipelineSplitArrayProcessorType =
  | typeof SPLIT_ARRAY
  | UnparsedObject;
export const SPLIT_ARRAY = "split_array";
