import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Status of the span.
 */
export type LLMObsExperimentSpanStatus =
  | typeof OK
  | typeof ERROR
  | UnparsedObject;
export const OK = "ok";
export const ERROR = "error";
