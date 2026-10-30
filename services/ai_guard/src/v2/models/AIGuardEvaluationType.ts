import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API resource type for AI Guard evaluation requests and responses.
 * Its value is `evaluations` for the action endpoint `/api/v2/ai-guard/evaluate`.
 */
export type AIGuardEvaluationType = typeof EVALUATIONS | UnparsedObject;
export const EVALUATIONS = "evaluations";
