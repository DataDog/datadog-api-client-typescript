import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineOcsfMappingLibrary } from "./ObservabilityPipelineOcsfMappingLibrary";

/**
 * Defines a single mapping rule for transforming logs into the OCSF schema.
 */
export type ObservabilityPipelineOcsfMapperProcessorMappingMapping =
  | ObservabilityPipelineOcsfMappingLibrary
  | UnparsedObject;
