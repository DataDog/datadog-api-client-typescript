import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates whether to redact characters from the first or last part of the matched value.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection =
  typeof FIRST | typeof LAST | UnparsedObject;
export const FIRST = "first";
export const LAST = "last";
