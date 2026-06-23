import { UnparsedObject } from "@datadog/datadog-api-client";

import { CIAppPipelineEventFinishedJob } from "./CIAppPipelineEventFinishedJob";
import { CIAppPipelineEventInProgressJob } from "./CIAppPipelineEventInProgressJob";

/**
 * Details of a CI job.
 */
export type CIAppPipelineEventJob =
  | CIAppPipelineEventFinishedJob
  | CIAppPipelineEventInProgressJob
  | UnparsedObject;
