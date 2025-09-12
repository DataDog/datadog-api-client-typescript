import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Validate query resource type.
 */
export type RulesValidateQueryRequestDataType =
  | typeof VALIDATE_QUERY
  | UnparsedObject;
export const VALIDATE_QUERY = "validate_query";
