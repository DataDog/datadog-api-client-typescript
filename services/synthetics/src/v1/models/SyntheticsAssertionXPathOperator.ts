import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Assertion operator to apply.
 */
export type SyntheticsAssertionXPathOperator =
  | typeof VALIDATES_X_PATH
  | UnparsedObject;
export const VALIDATES_X_PATH = "validatesXPath";
