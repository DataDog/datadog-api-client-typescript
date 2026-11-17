import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Assessment result for a label value.
 */
export type LLMObsAnnotationAssessment =
  | typeof PASS
  | typeof FAIL
  | UnparsedObject;
export const PASS = "pass";
export const FAIL = "fail";
