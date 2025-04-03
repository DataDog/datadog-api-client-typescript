import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON Schema meta-schema version used in the assertion.
 */
export type SyntheticsAssertionJSONSchemaMetaSchema =
  | typeof DRAFT_07
  | typeof DRAFT_06
  | UnparsedObject;
export const DRAFT_07 = "draft-07";
export const DRAFT_06 = "draft-06";
