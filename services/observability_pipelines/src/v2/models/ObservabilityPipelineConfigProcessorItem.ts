import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAddFieldsProcessor } from "./ObservabilityPipelineAddFieldsProcessor";
import { ObservabilityPipelineFilterProcessor } from "./ObservabilityPipelineFilterProcessor";
import { ObservabilityPipelineParseJSONProcessor } from "./ObservabilityPipelineParseJSONProcessor";
import { ObservabilityPipelineQuotaProcessor } from "./ObservabilityPipelineQuotaProcessor";
import { ObservabilityPipelineRemoveFieldsProcessor } from "./ObservabilityPipelineRemoveFieldsProcessor";
import { ObservabilityPipelineRenameFieldsProcessor } from "./ObservabilityPipelineRenameFieldsProcessor";

/**
 * A processor for the pipeline.
 */
export type ObservabilityPipelineConfigProcessorItem =
  | ObservabilityPipelineFilterProcessor
  | ObservabilityPipelineParseJSONProcessor
  | ObservabilityPipelineQuotaProcessor
  | ObservabilityPipelineAddFieldsProcessor
  | ObservabilityPipelineRemoveFieldsProcessor
  | ObservabilityPipelineRenameFieldsProcessor
  | UnparsedObject;
