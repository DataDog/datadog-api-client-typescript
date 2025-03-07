/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelineEventFinishedPipeline } from "./CIAppPipelineEventFinishedPipeline";
import { CIAppPipelineEventInProgressPipeline } from "./CIAppPipelineEventInProgressPipeline";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Details of the top level pipeline, build, or workflow of your CI.
 */

export type CIAppPipelineEventPipeline =
  | CIAppPipelineEventFinishedPipeline
  | CIAppPipelineEventInProgressPipeline
  | UnparsedObject;
