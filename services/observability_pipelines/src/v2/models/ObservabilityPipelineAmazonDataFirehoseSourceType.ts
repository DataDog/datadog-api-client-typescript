import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `amazon_data_firehose`.
 */
export type ObservabilityPipelineAmazonDataFirehoseSourceType =
  | typeof AMAZON_DATA_FIREHOSE
  | UnparsedObject;
export const AMAZON_DATA_FIREHOSE = "amazon_data_firehose";
