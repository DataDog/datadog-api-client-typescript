import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `remap_vrl`.
 */
export type ObservabilityPipelineRemapVrlProcessorType =
  | typeof REMAP_VRL
  | UnparsedObject;
export const REMAP_VRL = "remap_vrl";
