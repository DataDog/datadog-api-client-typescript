import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Facet info request resource type.
 */
export type FacetInfoRequestDataType =
  | typeof USERS_FACET_INFO_REQUEST
  | typeof ACCOUNTS_FACET_INFO_REQUEST
  | UnparsedObject;
export const USERS_FACET_INFO_REQUEST = "users_facet_info_request";
export const ACCOUNTS_FACET_INFO_REQUEST = "accounts_facet_info_request";
