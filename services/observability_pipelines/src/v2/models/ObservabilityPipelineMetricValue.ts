import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGeneratedMetricIncrementByField } from "./ObservabilityPipelineGeneratedMetricIncrementByField";
import { ObservabilityPipelineGeneratedMetricIncrementByOne } from "./ObservabilityPipelineGeneratedMetricIncrementByOne";

/**
 * Specifies how the value of the generated metric is computed.
 */
export type ObservabilityPipelineMetricValue =
  | ObservabilityPipelineGeneratedMetricIncrementByOne
  | ObservabilityPipelineGeneratedMetricIncrementByField
  | UnparsedObject;
