import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of account filters patch request.
 */
export type AccountFiltersPatchRequestType =
  | typeof ACCOUNT_FILTERS_PATCH_REQUEST
  | UnparsedObject;
export const ACCOUNT_FILTERS_PATCH_REQUEST = "account_filters_patch_request";
