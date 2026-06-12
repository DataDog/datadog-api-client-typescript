import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for global user organizations.
 */
export type GlobalOrgType = typeof GLOBAL_USER_ORGS | UnparsedObject;
export const GLOBAL_USER_ORGS = "global_user_orgs";
