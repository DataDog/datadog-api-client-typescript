import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the object
 */
export type IssueUserType = typeof USER | UnparsedObject;
export const USER = "user";
