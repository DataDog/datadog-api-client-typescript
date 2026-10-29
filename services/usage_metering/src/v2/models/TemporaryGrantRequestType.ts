import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The temporary grant request resource type.
 */
export type TemporaryGrantRequestType =
  | typeof TEMPORARY_GRANT_REQUESTS
  | UnparsedObject;
export const TEMPORARY_GRANT_REQUESTS = "temporary_grant_requests";
