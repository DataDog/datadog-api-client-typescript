import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type `users`.
 */
export type UserTargetType = typeof USERS | UnparsedObject;
export const USERS = "users";
