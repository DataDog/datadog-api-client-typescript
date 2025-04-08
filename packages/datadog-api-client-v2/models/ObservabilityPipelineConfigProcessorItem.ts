/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAddFieldsProcessor } from "./ObservabilityPipelineAddFieldsProcessor";
import { ObservabilityPipelineFilterProcessor } from "./ObservabilityPipelineFilterProcessor";
import { ObservabilityPipelineParseJSONProcessor } from "./ObservabilityPipelineParseJSONProcessor";
import { ObservabilityPipelineQuotaProcessor } from "./ObservabilityPipelineQuotaProcessor";
import { ObservabilityPipelineRemoveFieldsProcessor } from "./ObservabilityPipelineRemoveFieldsProcessor";
import { ObservabilityPipelineRenameFieldsProcessor } from "./ObservabilityPipelineRenameFieldsProcessor";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
