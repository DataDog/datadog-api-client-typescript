import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `amazon_opensearch`.
 */
export type ObservabilityPipelineAmazonOpenSearchDestinationType =
  | typeof AMAZON_OPENSEARCH
  | UnparsedObject;
export const AMAZON_OPENSEARCH = "amazon_opensearch";
