import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Validate response resource type.
 */
export type RulesValidateQueryResponseDataType =
  | typeof VALIDATE_RESPONSE
  | UnparsedObject;
export const VALIDATE_RESPONSE = "validate_response";
