import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication strategy to use.
 */
export type ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy =
  | typeof BASIC
  | typeof AWS
  | UnparsedObject;
export const BASIC = "basic";
export const AWS = "aws";
