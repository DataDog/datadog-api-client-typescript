/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineParseGrokProcessorIncludeRule } from "./ObservabilityPipelineParseGrokProcessorIncludeRule";
import { ObservabilityPipelineParseGrokProcessorRule } from "./ObservabilityPipelineParseGrokProcessorRule";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A single Grok parsing rule, selected by either source field or include query.
 */

export type ObservabilityPipelineParseGrokProcessorRuleItem =
  | ObservabilityPipelineParseGrokProcessorRule
  | ObservabilityPipelineParseGrokProcessorIncludeRule
  | UnparsedObject;
