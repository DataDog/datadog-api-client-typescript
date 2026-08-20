import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Assessment result for an Agent Observability experiment metric.
 */
export type LLMObsMetricAssessment = typeof PASS | typeof FAIL | UnparsedObject;
export const PASS = "pass";
export const FAIL = "fail";
