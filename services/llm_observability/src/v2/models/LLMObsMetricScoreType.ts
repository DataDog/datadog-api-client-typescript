import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of metric recorded for an LLM Observability experiment.
 */
export type LLMObsMetricScoreType =
  | typeof SCORE
  | typeof CATEGORICAL
  | typeof BOOLEAN
  | typeof JSON
  | UnparsedObject;
export const SCORE = "score";
export const CATEGORICAL = "categorical";
export const BOOLEAN = "boolean";
export const JSON = "json";
