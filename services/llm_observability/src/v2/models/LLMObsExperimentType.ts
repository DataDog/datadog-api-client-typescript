import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability experiment.
 */
export type LLMObsExperimentType = typeof EXPERIMENTS | UnparsedObject;
export const EXPERIMENTS = "experiments";
