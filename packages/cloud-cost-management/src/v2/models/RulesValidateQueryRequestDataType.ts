import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Validate query resource type.
 */
export type RulesValidateQueryRequestDataType =
  | typeof VALIDATE_QUERY
  | UnparsedObject;
export const VALIDATE_QUERY = "validate_query";
