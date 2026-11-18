import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of target whose scanning groups are served by the target-scoped group routes. `llm_observability` is Agent Observability.
 */
export type SensitiveDataScannerGroupTargetType =
  | typeof LLM_OBSERVABILITY
  | UnparsedObject;
export const LLM_OBSERVABILITY = "llm_observability";
