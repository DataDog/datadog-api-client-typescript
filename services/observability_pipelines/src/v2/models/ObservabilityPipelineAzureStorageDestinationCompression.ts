import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAzureStorageDestinationCompressionGzip } from "./ObservabilityPipelineAzureStorageDestinationCompressionGzip";
import { ObservabilityPipelineAzureStorageDestinationCompressionZstd } from "./ObservabilityPipelineAzureStorageDestinationCompressionZstd";

/**
 * Compression configuration for archived logs. When omitted, logs are compressed with gzip
 * for backward compatibility.
 */
export type ObservabilityPipelineAzureStorageDestinationCompression =
  | ObservabilityPipelineAzureStorageDestinationCompressionZstd
  | ObservabilityPipelineAzureStorageDestinationCompressionGzip
  | UnparsedObject;
