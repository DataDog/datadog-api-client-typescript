import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Output parsing type for a custom LLM judge evaluator.
 */
export type LLMObsCustomEvalConfigParsingType =
  | typeof STRUCTURED_OUTPUT
  | typeof JSON
  | typeof KEYWORD_SEARCH
  | typeof TYPED_QUESTIONS
  | UnparsedObject;
export const STRUCTURED_OUTPUT = "structured_output";
export const JSON = "json";
export const KEYWORD_SEARCH = "keyword_search";
export const TYPED_QUESTIONS = "typed_questions";
