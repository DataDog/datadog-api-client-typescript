import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Schedule Members resource type.
 */
export type ScheduleMemberType = typeof MEMBERS | UnparsedObject;
export const MEMBERS = "members";
