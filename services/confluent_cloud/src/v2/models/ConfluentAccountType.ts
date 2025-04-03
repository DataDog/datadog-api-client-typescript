import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for this API. Should always be `confluent-cloud-accounts`.
 */
export type ConfluentAccountType =
  | typeof CONFLUENT_CLOUD_ACCOUNTS
  | UnparsedObject;
export const CONFLUENT_CLOUD_ACCOUNTS = "confluent-cloud-accounts";
