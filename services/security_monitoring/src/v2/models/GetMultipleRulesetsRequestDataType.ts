import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Get multiple rulesets request resource type.
 */
export type GetMultipleRulesetsRequestDataType =
  | typeof GET_MULTIPLE_RULESETS_REQUEST
  | UnparsedObject;
export const GET_MULTIPLE_RULESETS_REQUEST = "get_multiple_rulesets_request";
