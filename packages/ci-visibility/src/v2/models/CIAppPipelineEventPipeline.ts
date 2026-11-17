import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CIAppPipelineEventFinishedPipeline } from "./CIAppPipelineEventFinishedPipeline";
import { CIAppPipelineEventInProgressPipeline } from "./CIAppPipelineEventInProgressPipeline";

/**
 * Details of the top level pipeline, build, or workflow of your CI.
 */
export type CIAppPipelineEventPipeline =
  | CIAppPipelineEventFinishedPipeline
  | CIAppPipelineEventInProgressPipeline
  | UnparsedObject;
