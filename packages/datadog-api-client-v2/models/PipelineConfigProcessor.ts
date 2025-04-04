/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ParseJSONProcessor } from "./ParseJSONProcessor";
import { PipelineAddFieldsProcessor } from "./PipelineAddFieldsProcessor";
import { PipelineFilterProcessor } from "./PipelineFilterProcessor";
import { PipelineQuotaProcessor } from "./PipelineQuotaProcessor";
import { PipelineRemoveFieldsProcessor } from "./PipelineRemoveFieldsProcessor";
import { PipelineRenameFieldsProcessor } from "./PipelineRenameFieldsProcessor";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A processor for the pipeline.
 */

export type PipelineConfigProcessor =
  | PipelineFilterProcessor
  | ParseJSONProcessor
  | PipelineQuotaProcessor
  | PipelineAddFieldsProcessor
  | PipelineRemoveFieldsProcessor
  | PipelineRenameFieldsProcessor
  | UnparsedObject;
