import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for organizations.
 */
export type OrgResourceType = typeof ORGS | UnparsedObject;
export const ORGS = "orgs";
