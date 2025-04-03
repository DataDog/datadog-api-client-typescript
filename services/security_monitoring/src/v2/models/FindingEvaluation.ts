import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The evaluation of the finding.
 */
export type FindingEvaluation = typeof PASS | typeof FAIL | UnparsedObject;
export const PASS = "pass";
export const FAIL = "fail";
