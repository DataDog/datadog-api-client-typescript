import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineClickhouseDestinationCompressionAlgorithm } from "./ObservabilityPipelineClickhouseDestinationCompressionAlgorithm";
import { ObservabilityPipelineClickhouseDestinationCompressionObject } from "./ObservabilityPipelineClickhouseDestinationCompressionObject";

/**
 * Compression setting for outbound HTTP requests to ClickHouse.
 * Can be specified as a shorthand string (`"gzip"` or `"none"`) or as an object
 * with an `algorithm` field and an optional `level` (gzip only, 1–9).
 */
export type ObservabilityPipelineClickhouseDestinationCompression =
  | ObservabilityPipelineClickhouseDestinationCompressionAlgorithm
  | ObservabilityPipelineClickhouseDestinationCompressionObject
  | UnparsedObject;
