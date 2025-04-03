import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Elasticsearch destination.
 */
export type CustomDestinationForwardDestinationElasticsearchType =
  | typeof ELASTICSEARCH
  | UnparsedObject;
export const ELASTICSEARCH = "elasticsearch";
