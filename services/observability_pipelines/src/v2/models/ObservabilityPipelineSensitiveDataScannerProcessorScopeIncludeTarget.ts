import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Applies the rule only to included fields.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorScopeIncludeTarget =
  typeof INCLUDE | UnparsedObject;
export const INCLUDE = "include";
