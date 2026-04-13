import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Allowed include options for org group endpoints.
 */
export type OrgGroupIncludeOption = typeof MEMBERSHIPS | UnparsedObject;
export const MEMBERSHIPS = "memberships";
