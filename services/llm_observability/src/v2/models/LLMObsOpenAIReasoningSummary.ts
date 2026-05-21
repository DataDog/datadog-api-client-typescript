import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The verbosity of the reasoning summary.
 */
export type LLMObsOpenAIReasoningSummary =
  | typeof AUTO
  | typeof CONCISE
  | typeof DETAILED
  | UnparsedObject;
export const AUTO = "auto";
export const CONCISE = "concise";
export const DETAILED = "detailed";
