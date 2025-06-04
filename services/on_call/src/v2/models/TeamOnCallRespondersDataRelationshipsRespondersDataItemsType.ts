import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifies the resource type for individual user entities associated with on-call response.
 */
export type TeamOnCallRespondersDataRelationshipsRespondersDataItemsType =
  | typeof USERS
  | UnparsedObject;
export const USERS = "users";
