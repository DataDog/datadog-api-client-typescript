import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAddEnvVarsProcessor } from "./ObservabilityPipelineAddEnvVarsProcessor";
import { ObservabilityPipelineAddFieldsProcessor } from "./ObservabilityPipelineAddFieldsProcessor";
import { ObservabilityPipelineAddHostnameProcessor } from "./ObservabilityPipelineAddHostnameProcessor";
import { ObservabilityPipelineCustomProcessor } from "./ObservabilityPipelineCustomProcessor";
import { ObservabilityPipelineDatadogTagsProcessor } from "./ObservabilityPipelineDatadogTagsProcessor";
import { ObservabilityPipelineDedupeProcessor } from "./ObservabilityPipelineDedupeProcessor";
import { ObservabilityPipelineEnrichmentTableProcessor } from "./ObservabilityPipelineEnrichmentTableProcessor";
import { ObservabilityPipelineFilterProcessor } from "./ObservabilityPipelineFilterProcessor";
import { ObservabilityPipelineGenerateMetricsProcessor } from "./ObservabilityPipelineGenerateMetricsProcessor";
import { ObservabilityPipelineOcsfMapperProcessor } from "./ObservabilityPipelineOcsfMapperProcessor";
import { ObservabilityPipelineParseGrokProcessor } from "./ObservabilityPipelineParseGrokProcessor";
import { ObservabilityPipelineParseJSONProcessor } from "./ObservabilityPipelineParseJSONProcessor";
import { ObservabilityPipelineParseXMLProcessor } from "./ObservabilityPipelineParseXMLProcessor";
import { ObservabilityPipelineQuotaProcessor } from "./ObservabilityPipelineQuotaProcessor";
import { ObservabilityPipelineReduceProcessor } from "./ObservabilityPipelineReduceProcessor";
import { ObservabilityPipelineRemoveFieldsProcessor } from "./ObservabilityPipelineRemoveFieldsProcessor";
import { ObservabilityPipelineRenameFieldsProcessor } from "./ObservabilityPipelineRenameFieldsProcessor";
import { ObservabilityPipelineSampleProcessor } from "./ObservabilityPipelineSampleProcessor";
import { ObservabilityPipelineSensitiveDataScannerProcessor } from "./ObservabilityPipelineSensitiveDataScannerProcessor";
import { ObservabilityPipelineSplitArrayProcessor } from "./ObservabilityPipelineSplitArrayProcessor";
import { ObservabilityPipelineThrottleProcessor } from "./ObservabilityPipelineThrottleProcessor";

/**
 * A processor for the pipeline.
 */
export type ObservabilityPipelineConfigProcessorItem =
  | ObservabilityPipelineAddEnvVarsProcessor
  | ObservabilityPipelineAddFieldsProcessor
  | ObservabilityPipelineAddHostnameProcessor
  | ObservabilityPipelineCustomProcessor
  | ObservabilityPipelineDatadogTagsProcessor
  | ObservabilityPipelineDedupeProcessor
  | ObservabilityPipelineEnrichmentTableProcessor
  | ObservabilityPipelineFilterProcessor
  | ObservabilityPipelineGenerateMetricsProcessor
  | ObservabilityPipelineOcsfMapperProcessor
  | ObservabilityPipelineParseGrokProcessor
  | ObservabilityPipelineParseJSONProcessor
  | ObservabilityPipelineParseXMLProcessor
  | ObservabilityPipelineQuotaProcessor
  | ObservabilityPipelineReduceProcessor
  | ObservabilityPipelineRemoveFieldsProcessor
  | ObservabilityPipelineRenameFieldsProcessor
  | ObservabilityPipelineSampleProcessor
  | ObservabilityPipelineSensitiveDataScannerProcessor
  | ObservabilityPipelineSplitArrayProcessor
  | ObservabilityPipelineThrottleProcessor
  | UnparsedObject;
