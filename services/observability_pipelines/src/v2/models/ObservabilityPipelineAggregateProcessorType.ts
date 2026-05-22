import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value must be `aggregate`.
 */
export type ObservabilityPipelineAggregateProcessorType =
  | typeof AGGREGATE
  | UnparsedObject;
export const AGGREGATE = "aggregate";
