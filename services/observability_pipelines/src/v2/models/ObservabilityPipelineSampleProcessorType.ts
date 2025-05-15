import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `sample`.
 */
export type ObservabilityPipelineSampleProcessorType =
  | typeof SAMPLE
  | UnparsedObject;
export const SAMPLE = "sample";
