import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Excludes specific fields from processing.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget =
  typeof EXCLUDE | UnparsedObject;
export const EXCLUDE = "exclude";
