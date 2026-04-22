import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the anonymize users response.
 */
export type AnonymizeUsersResponseType =
  | typeof ANONYMIZE_USERS_RESPONSE
  | UnparsedObject;
export const ANONYMIZE_USERS_RESPONSE = "anonymize_users_response";
