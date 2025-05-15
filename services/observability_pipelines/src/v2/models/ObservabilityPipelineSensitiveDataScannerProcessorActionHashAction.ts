import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Action type that replaces the matched sensitive data with a hashed representation, preserving structure while securing content.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction =
  typeof HASH | UnparsedObject;
export const HASH = "hash";
