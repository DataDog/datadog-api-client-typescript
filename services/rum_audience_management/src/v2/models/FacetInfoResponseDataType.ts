import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Users facet info resource type.
 */
export type FacetInfoResponseDataType =
  | typeof USERS_FACET_INFO
  | UnparsedObject;
export const USERS_FACET_INFO = "users_facet_info";
