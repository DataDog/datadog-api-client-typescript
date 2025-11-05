import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineConfigProcessorGroup } from "./ObservabilityPipelineConfigProcessorGroup";
import { ObservabilityPipelineConfigProcessorItem } from "./ObservabilityPipelineConfigProcessorItem";

/**
 * A list of processors that transform or enrich log data, or a list of grouped processor configurations.
 */
export type ObservabilityPipelineConfigProcessors =
  | Array<ObservabilityPipelineConfigProcessorItem>
  | Array<ObservabilityPipelineConfigProcessorGroup>
  | UnparsedObject;
