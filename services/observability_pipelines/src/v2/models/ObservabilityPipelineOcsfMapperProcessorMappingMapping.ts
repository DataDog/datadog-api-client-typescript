import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineOcsfMappingCustom } from "./ObservabilityPipelineOcsfMappingCustom";
import { ObservabilityPipelineOcsfMappingLibrary } from "./ObservabilityPipelineOcsfMappingLibrary";

/**
 * Defines a single mapping rule for transforming logs into the OCSF schema.
 */
export type ObservabilityPipelineOcsfMapperProcessorMappingMapping =
  | ObservabilityPipelineOcsfMappingLibrary
  | ObservabilityPipelineOcsfMappingCustom
  | UnparsedObject;
