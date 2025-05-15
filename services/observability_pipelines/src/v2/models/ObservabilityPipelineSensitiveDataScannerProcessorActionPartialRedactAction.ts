import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Action type that redacts part of the sensitive data while preserving a configurable number of characters, typically used for masking purposes (e.g., show last 4 digits of a credit card).
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction =
  typeof PARTIAL_REDACT | UnparsedObject;
export const PARTIAL_REDACT = "partial_redact";
