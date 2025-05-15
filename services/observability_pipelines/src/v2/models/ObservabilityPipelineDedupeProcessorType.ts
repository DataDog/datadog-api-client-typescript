import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `dedupe`.
 */
export type ObservabilityPipelineDedupeProcessorType =
  | typeof DEDUPE
  | UnparsedObject;
export const DEDUPE = "dedupe";
