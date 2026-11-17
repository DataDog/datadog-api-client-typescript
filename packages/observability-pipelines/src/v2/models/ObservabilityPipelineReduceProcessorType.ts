import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The processor type. The value should always be `reduce`.
 */
export type ObservabilityPipelineReduceProcessorType =
  | typeof REDUCE
  | UnparsedObject;
export const REDUCE = "reduce";
