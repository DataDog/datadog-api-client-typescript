import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonS3GenericCompressionGzip } from "./ObservabilityPipelineAmazonS3GenericCompressionGzip";
import { ObservabilityPipelineAmazonS3GenericCompressionSnappy } from "./ObservabilityPipelineAmazonS3GenericCompressionSnappy";
import { ObservabilityPipelineAmazonS3GenericCompressionZstd } from "./ObservabilityPipelineAmazonS3GenericCompressionZstd";

/**
 * Compression algorithm applied to encoded logs.
 */
export type ObservabilityPipelineAmazonS3GenericCompression =
  | ObservabilityPipelineAmazonS3GenericCompressionZstd
  | ObservabilityPipelineAmazonS3GenericCompressionGzip
  | ObservabilityPipelineAmazonS3GenericCompressionSnappy
  | UnparsedObject;
