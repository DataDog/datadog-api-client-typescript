import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the commitments list response resource.
 */
export type CommitmentsListResponseType =
  | typeof COMMITMENTS_LIST_RESPONSE
  | UnparsedObject;
export const COMMITMENTS_LIST_RESPONSE = "commitments_list_response";
