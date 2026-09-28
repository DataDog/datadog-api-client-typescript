import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Relationship object that should be included in the response.
 */
export type PersonalAccessTokensIncludeQueryParameterItem =
  | typeof LEAK_INFORMATION
  | UnparsedObject;
export const LEAK_INFORMATION = "leak_information";
