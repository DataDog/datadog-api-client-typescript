import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. Always `amazon_security_lake`.
 */
export type ObservabilityPipelineAmazonSecurityLakeDestinationType =
  | typeof AMAZON_SECURITY_LAKE
  | UnparsedObject;
export const AMAZON_SECURITY_LAKE = "amazon_security_lake";
