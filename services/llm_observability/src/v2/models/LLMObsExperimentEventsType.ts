import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for an experiment events collection.
 */
export type LLMObsExperimentEventsType =
  | typeof EXPERIMENT_EVENTS
  | UnparsedObject;
export const EXPERIMENT_EVENTS = "experiment_events";
