import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Assertion operator to apply.
 */
export type SyntheticsAssertionJSONPathOperator =
  | typeof VALIDATES_JSON_PATH
  | UnparsedObject;
export const VALIDATES_JSON_PATH = "validatesJSONPath";
