import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `custom_processor`.
 */
export type ObservabilityPipelineCustomProcessorProcessorType =
  | typeof CUSTOM_PROCESSOR
  | UnparsedObject;
export const CUSTOM_PROCESSOR = "custom_processor";
