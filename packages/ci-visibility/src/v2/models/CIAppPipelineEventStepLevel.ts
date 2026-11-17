import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Used to distinguish between pipelines, stages, jobs and steps.
 */
export type CIAppPipelineEventStepLevel = typeof STEP | UnparsedObject;
export const STEP = "step";
