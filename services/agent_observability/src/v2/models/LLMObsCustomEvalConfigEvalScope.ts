import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Scope at which to evaluate spans. `trace_fan_out` requires `llm_judge_config.target_query`.
 */
export type LLMObsCustomEvalConfigEvalScope =
  | typeof SPAN
  | typeof TRACE
  | typeof TRACE_FAN_OUT
  | typeof SESSION
  | UnparsedObject;
export const SPAN = "span";
export const TRACE = "trace";
export const TRACE_FAN_OUT = "trace_fan_out";
export const SESSION = "session";
