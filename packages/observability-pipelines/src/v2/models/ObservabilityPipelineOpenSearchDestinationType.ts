import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The destination type. The value should always be `opensearch`.
 */
export type ObservabilityPipelineOpenSearchDestinationType =
  | typeof OPENSEARCH
  | UnparsedObject;
export const OPENSEARCH = "opensearch";
