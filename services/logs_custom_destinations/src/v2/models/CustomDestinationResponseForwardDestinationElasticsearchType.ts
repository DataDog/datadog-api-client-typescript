import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Elasticsearch destination.
 */
export type CustomDestinationResponseForwardDestinationElasticsearchType =
  | typeof ELASTICSEARCH
  | UnparsedObject;
export const ELASTICSEARCH = "elasticsearch";
