import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ObservabilityPipelineDiskBufferOptions } from "./ObservabilityPipelineDiskBufferOptions";
import { ObservabilityPipelineMemoryBufferOptions } from "./ObservabilityPipelineMemoryBufferOptions";
import { ObservabilityPipelineMemoryBufferSizeOptions } from "./ObservabilityPipelineMemoryBufferSizeOptions";

/**
 * Configuration for buffer settings on destination components.
 */
export type ObservabilityPipelineBufferOptions =
  | ObservabilityPipelineDiskBufferOptions
  | ObservabilityPipelineMemoryBufferOptions
  | ObservabilityPipelineMemoryBufferSizeOptions
  | UnparsedObject;
