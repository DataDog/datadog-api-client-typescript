import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonS3DestinationCompressionGzip } from "./ObservabilityPipelineAmazonS3DestinationCompressionGzip";
import { ObservabilityPipelineAmazonS3DestinationCompressionZstd } from "./ObservabilityPipelineAmazonS3DestinationCompressionZstd";

/**
 * Compression configuration for archived logs. When omitted, logs are compressed with gzip
 * for backward compatibility.
 */
export type ObservabilityPipelineAmazonS3DestinationCompression =
  | ObservabilityPipelineAmazonS3DestinationCompressionZstd
  | ObservabilityPipelineAmazonS3DestinationCompressionGzip
  | UnparsedObject;
