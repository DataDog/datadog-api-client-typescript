import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Used to distinguish between pipelines, stages, jobs, and steps.
 */
export type CIAppPipelineEventJobLevel = typeof JOB | UnparsedObject;
export const JOB = "job";
