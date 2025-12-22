import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAddEnvVarsProcessor } from "./ObservabilityPipelineAddEnvVarsProcessor";
import { ObservabilityPipelineAddFieldsProcessor } from "./ObservabilityPipelineAddFieldsProcessor";
import { ObservabilityPipelineCustomProcessor } from "./ObservabilityPipelineCustomProcessor";
import { ObservabilityPipelineDatadogTagsProcessor } from "./ObservabilityPipelineDatadogTagsProcessor";
import { ObservabilityPipelineDedupeProcessor } from "./ObservabilityPipelineDedupeProcessor";
import { ObservabilityPipelineEnrichmentTableProcessor } from "./ObservabilityPipelineEnrichmentTableProcessor";
import { ObservabilityPipelineFilterProcessor } from "./ObservabilityPipelineFilterProcessor";
import { ObservabilityPipelineGenerateMetricsProcessor } from "./ObservabilityPipelineGenerateMetricsProcessor";
import { ObservabilityPipelineMetricTagsProcessor } from "./ObservabilityPipelineMetricTagsProcessor";
import { ObservabilityPipelineOcsfMapperProcessor } from "./ObservabilityPipelineOcsfMapperProcessor";
import { ObservabilityPipelineParseGrokProcessor } from "./ObservabilityPipelineParseGrokProcessor";
import { ObservabilityPipelineParseJSONProcessor } from "./ObservabilityPipelineParseJSONProcessor";
import { ObservabilityPipelineQuotaProcessor } from "./ObservabilityPipelineQuotaProcessor";
import { ObservabilityPipelineReduceProcessor } from "./ObservabilityPipelineReduceProcessor";
import { ObservabilityPipelineRemoveFieldsProcessor } from "./ObservabilityPipelineRemoveFieldsProcessor";
import { ObservabilityPipelineRenameFieldsProcessor } from "./ObservabilityPipelineRenameFieldsProcessor";
import { ObservabilityPipelineSampleProcessor } from "./ObservabilityPipelineSampleProcessor";
import { ObservabilityPipelineSensitiveDataScannerProcessor } from "./ObservabilityPipelineSensitiveDataScannerProcessor";
import { ObservabilityPipelineThrottleProcessor } from "./ObservabilityPipelineThrottleProcessor";

/**
 * A processor for the pipeline.
 */
export type ObservabilityPipelineConfigProcessorItem =
  | ObservabilityPipelineFilterProcessor
  | ObservabilityPipelineAddEnvVarsProcessor
  | ObservabilityPipelineAddFieldsProcessor
  | ObservabilityPipelineCustomProcessor
  | ObservabilityPipelineDatadogTagsProcessor
  | ObservabilityPipelineDedupeProcessor
  | ObservabilityPipelineEnrichmentTableProcessor
  | ObservabilityPipelineGenerateMetricsProcessor
  | ObservabilityPipelineOcsfMapperProcessor
  | ObservabilityPipelineParseGrokProcessor
  | ObservabilityPipelineParseJSONProcessor
  | ObservabilityPipelineQuotaProcessor
  | ObservabilityPipelineReduceProcessor
  | ObservabilityPipelineRemoveFieldsProcessor
  | ObservabilityPipelineRenameFieldsProcessor
  | ObservabilityPipelineSampleProcessor
  | ObservabilityPipelineSensitiveDataScannerProcessor
  | ObservabilityPipelineThrottleProcessor
  | ObservabilityPipelineMetricTagsProcessor
  | UnparsedObject;
