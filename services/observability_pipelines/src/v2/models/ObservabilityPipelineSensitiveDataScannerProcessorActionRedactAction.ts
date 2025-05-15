import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Action type that completely replaces the matched sensitive data with a fixed replacement string to remove all visibility.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction =
  typeof REDACT | UnparsedObject;
export const REDACT = "redact";
