import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The state of the rule evaluation.
 */
export type State = typeof PASS | typeof FAIL | typeof SKIP | UnparsedObject;
export const PASS = "pass";
export const FAIL = "fail";
export const SKIP = "skip";
