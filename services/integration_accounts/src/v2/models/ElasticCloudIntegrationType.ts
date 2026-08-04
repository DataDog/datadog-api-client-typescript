import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Integration discriminator for Elastic Cloud.
 */
export type ElasticCloudIntegrationType = typeof ELASTIC_CLOUD | UnparsedObject;
export const ELASTIC_CLOUD = "elastic-cloud";
