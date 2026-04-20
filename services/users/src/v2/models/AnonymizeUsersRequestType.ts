import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the anonymize users request.
 */
export type AnonymizeUsersRequestType =
  | typeof ANONYMIZE_USERS_REQUEST
  | UnparsedObject;
export const ANONYMIZE_USERS_REQUEST = "anonymize_users_request";
