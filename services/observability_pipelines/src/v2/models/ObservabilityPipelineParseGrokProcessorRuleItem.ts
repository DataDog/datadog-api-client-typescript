import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineParseGrokProcessorIncludeRule } from "./ObservabilityPipelineParseGrokProcessorIncludeRule";
import { ObservabilityPipelineParseGrokProcessorRule } from "./ObservabilityPipelineParseGrokProcessorRule";

/**
 * A single Grok parsing rule, selected by either source field or include query.
 */
export type ObservabilityPipelineParseGrokProcessorRuleItem =
  | ObservabilityPipelineParseGrokProcessorRule
  | ObservabilityPipelineParseGrokProcessorIncludeRule
  | UnparsedObject;
