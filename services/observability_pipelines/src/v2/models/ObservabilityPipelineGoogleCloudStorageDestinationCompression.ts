import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGoogleCloudStorageDestinationCompressionGzip } from "./ObservabilityPipelineGoogleCloudStorageDestinationCompressionGzip";
import { ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstd } from "./ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstd";

/**
 * Compression configuration for archived logs. When omitted, logs are compressed with gzip
 * for backward compatibility.
 */
export type ObservabilityPipelineGoogleCloudStorageDestinationCompression =
  | ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstd
  | ObservabilityPipelineGoogleCloudStorageDestinationCompressionGzip
  | UnparsedObject;
