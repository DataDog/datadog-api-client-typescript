import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonS3GenericEncodingJson } from "./ObservabilityPipelineAmazonS3GenericEncodingJson";
import { ObservabilityPipelineAmazonS3GenericEncodingParquet } from "./ObservabilityPipelineAmazonS3GenericEncodingParquet";

/**
 * Encoding format for the destination.
 */
export type ObservabilityPipelineAmazonS3GenericEncoding =
  | ObservabilityPipelineAmazonS3GenericEncodingJson
  | ObservabilityPipelineAmazonS3GenericEncodingParquet
  | UnparsedObject;
