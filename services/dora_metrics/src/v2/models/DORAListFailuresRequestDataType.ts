import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `DORAListFailuresRequestDataType` object.
 */
export type DORAListFailuresRequestDataType =
  | typeof DORA_FAILURES_LIST_REQUEST
  | UnparsedObject;
export const DORA_FAILURES_LIST_REQUEST = "dora_failures_list_request";
