import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The lookup source type. The value should always be `tag`.
 */
export type ObservabilityPipelineMetricEnrichmentTableTagLookupType =
  | typeof TAG
  | UnparsedObject;
export const TAG = "tag";
