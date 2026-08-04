import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifier of an Elastic Cloud dataflow.
 */
export type ElasticCloudDataflowId = typeof METRICS | UnparsedObject;
export const METRICS = "elastic-cloud-metrics";
