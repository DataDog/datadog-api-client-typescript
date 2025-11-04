import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Get mappings response resource type.
 */
export type GetMappingResponseDataType =
  | typeof GET_MAPPINGS_RESPONSE
  | UnparsedObject;
export const GET_MAPPINGS_RESPONSE = "get_mappings_response";
