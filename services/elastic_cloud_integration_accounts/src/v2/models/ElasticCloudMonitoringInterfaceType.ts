import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Interface discriminator for the Elastic Cloud monitoring interface.
 */
export type ElasticCloudMonitoringInterfaceType =
  | typeof ELASTIC_CLOUD
  | UnparsedObject;
export const ELASTIC_CLOUD = "elastic-cloud";
