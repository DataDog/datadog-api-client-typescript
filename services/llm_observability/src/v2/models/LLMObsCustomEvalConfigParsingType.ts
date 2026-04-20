import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Output parsing type for a custom LLM judge evaluator.
 */
export type LLMObsCustomEvalConfigParsingType =
  | typeof STRUCTURED_OUTPUT
  | typeof JSON
  | UnparsedObject;
export const STRUCTURED_OUTPUT = "structured_output";
export const JSON = "json";
