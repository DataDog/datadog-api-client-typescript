import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The processor type. The value should always be `custom_processor`.
 */
export type ObservabilityPipelineCustomProcessorType =
  | typeof CUSTOM_PROCESSOR
  | UnparsedObject;
export const CUSTOM_PROCESSOR = "custom_processor";
