import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Schedule Members resource type.
 */
export type ScheduleMemberType = typeof MEMBERS | UnparsedObject;
export const MEMBERS = "members";
