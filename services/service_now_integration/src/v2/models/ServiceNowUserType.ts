import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for ServiceNow user resources
 */
export type ServiceNowUserType = typeof USERS | UnparsedObject;
export const USERS = "users";
