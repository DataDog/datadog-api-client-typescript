import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Datadog product whose scanning groups are served by the target-scoped group routes.
 */
export type SensitiveDataScannerGroupTarget =
  | typeof LLM_OBSERVABILITY
  | UnparsedObject;
export const LLM_OBSERVABILITY = "llm_observability";
