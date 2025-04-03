import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Used to distinguish between pipelines, stages, jobs and steps.
 */
export type CIAppPipelineEventStageLevel = typeof STAGE | UnparsedObject;
export const STAGE = "stage";
