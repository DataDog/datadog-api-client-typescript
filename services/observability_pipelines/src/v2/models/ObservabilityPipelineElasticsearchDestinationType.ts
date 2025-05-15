import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `elasticsearch`.
 */
export type ObservabilityPipelineElasticsearchDestinationType =
  | typeof ELASTICSEARCH
  | UnparsedObject;
export const ELASTICSEARCH = "elasticsearch";
