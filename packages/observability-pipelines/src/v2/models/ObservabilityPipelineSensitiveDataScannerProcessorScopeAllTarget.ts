import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Applies the rule to all fields.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget =
  | typeof ALL
  | UnparsedObject;
export const ALL = "all";
