import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CIAppPipelineEventFinishedJob } from "./CIAppPipelineEventFinishedJob";
import { CIAppPipelineEventInProgressJob } from "./CIAppPipelineEventInProgressJob";

/**
 * Details of a CI job.
 */
export type CIAppPipelineEventJob =
  | CIAppPipelineEventFinishedJob
  | CIAppPipelineEventInProgressJob
  | UnparsedObject;
