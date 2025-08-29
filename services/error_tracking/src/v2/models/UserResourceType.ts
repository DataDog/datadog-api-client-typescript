import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * User resource type.
 */
export type UserResourceType = typeof USER | UnparsedObject;
export const USER = "user";
