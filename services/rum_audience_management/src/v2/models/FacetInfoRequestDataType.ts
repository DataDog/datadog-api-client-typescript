import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Users facet info request resource type.
 */
export type FacetInfoRequestDataType =
  | typeof USERS_FACET_INFO_REQUEST
  | UnparsedObject;
export const USERS_FACET_INFO_REQUEST = "users_facet_info_request";
