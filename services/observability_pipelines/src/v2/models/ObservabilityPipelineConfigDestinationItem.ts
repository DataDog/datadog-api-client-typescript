import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineDatadogLogsDestination } from "./ObservabilityPipelineDatadogLogsDestination";

/**
 * A destination for the pipeline.
 */
export type ObservabilityPipelineConfigDestinationItem =
  | ObservabilityPipelineDatadogLogsDestination
  | UnparsedObject;
