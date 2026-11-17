import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Indicates that a predefined library pattern is used.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType =
  typeof LIBRARY | UnparsedObject;
export const LIBRARY = "library";
