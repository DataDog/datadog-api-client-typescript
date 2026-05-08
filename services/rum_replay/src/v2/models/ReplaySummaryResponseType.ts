import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * RUM replay summary response resource type.
 */
export type ReplaySummaryResponseType =
  | typeof SUMMARY_RESPONSE
  | UnparsedObject;
export const SUMMARY_RESPONSE = "summary_response";
