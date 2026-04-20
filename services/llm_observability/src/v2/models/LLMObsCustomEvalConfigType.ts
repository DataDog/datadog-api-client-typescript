import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the custom LLM Observability evaluator configuration resource.
 */
export type LLMObsCustomEvalConfigType =
  | typeof EVALUATOR_CONFIG
  | UnparsedObject;
export const EVALUATOR_CONFIG = "evaluator_config";
