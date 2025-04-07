import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for this request.
 */
export type ConfluentResourceType =
  | typeof CONFLUENT_CLOUD_RESOURCES
  | UnparsedObject;
export const CONFLUENT_CLOUD_RESOURCES = "confluent-cloud-resources";
