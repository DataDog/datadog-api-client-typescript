import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Applies the rule to all fields.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget =
  | typeof ALL
  | UnparsedObject;
export const ALL = "all";
