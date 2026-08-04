import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Interface discriminator for the Elastic Cloud CCM interface.
 */
export type ElasticCloudCcmInterfaceType =
  | typeof ELASTIC_CLOUD_CCM
  | UnparsedObject;
export const ELASTIC_CLOUD_CCM = "elastic-cloud-ccm";
