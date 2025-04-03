import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Assertion operator to apply.
 */
export type SyntheticsAssertionJSONSchemaOperator =
  | typeof VALIDATES_JSON_SCHEMA
  | UnparsedObject;
export const VALIDATES_JSON_SCHEMA = "validatesJSONSchema";
