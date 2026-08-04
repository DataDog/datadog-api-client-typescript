import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Supported Elastic Cloud interface (source-type) ids.
 */
export type ElasticCloudInterfaceId =
  | typeof ELASTIC_CLOUD
  | typeof ELASTIC_CLOUD_CCM
  | UnparsedObject;
export const ELASTIC_CLOUD = "elastic-cloud";
export const ELASTIC_CLOUD_CCM = "elastic-cloud-ccm";
