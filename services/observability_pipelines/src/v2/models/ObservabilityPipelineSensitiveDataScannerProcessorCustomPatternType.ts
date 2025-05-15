import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates a custom regular expression is used for matching.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType =
  typeof CUSTOM | UnparsedObject;
export const CUSTOM = "custom";
