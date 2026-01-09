import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Users resource type.
 */
export type StatusPagesUserType = typeof USERS | UnparsedObject;
export const USERS = "users";
