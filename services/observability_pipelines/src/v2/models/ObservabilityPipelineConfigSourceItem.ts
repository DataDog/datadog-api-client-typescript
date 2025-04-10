import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineDatadogAgentSource } from "./ObservabilityPipelineDatadogAgentSource";
import { ObservabilityPipelineKafkaSource } from "./ObservabilityPipelineKafkaSource";

/**
 * A data source for the pipeline.
 */
export type ObservabilityPipelineConfigSourceItem =
  | ObservabilityPipelineKafkaSource
  | ObservabilityPipelineDatadogAgentSource
  | UnparsedObject;
