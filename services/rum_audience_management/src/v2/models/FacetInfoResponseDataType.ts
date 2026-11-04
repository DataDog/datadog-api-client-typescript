import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Facet info resource type.
 */
export type FacetInfoResponseDataType =
  | typeof USERS_FACET_INFO
  | typeof ACCOUNTS_FACET_INFO
  | UnparsedObject;
export const USERS_FACET_INFO = "users_facet_info";
export const ACCOUNTS_FACET_INFO = "accounts_facet_info";
