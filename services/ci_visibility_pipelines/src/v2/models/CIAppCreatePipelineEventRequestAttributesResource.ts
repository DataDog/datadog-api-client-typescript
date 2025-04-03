import { UnparsedObject } from "@datadog/datadog-api-client";

import { CIAppPipelineEventJob } from "./CIAppPipelineEventJob";
import { CIAppPipelineEventPipeline } from "./CIAppPipelineEventPipeline";
import { CIAppPipelineEventStage } from "./CIAppPipelineEventStage";
import { CIAppPipelineEventStep } from "./CIAppPipelineEventStep";

/**
 * Details of the CI pipeline event.
 */
export type CIAppCreatePipelineEventRequestAttributesResource =
  | CIAppPipelineEventPipeline
  | CIAppPipelineEventStage
  | CIAppPipelineEventJob
  | CIAppPipelineEventStep
  | UnparsedObject;
