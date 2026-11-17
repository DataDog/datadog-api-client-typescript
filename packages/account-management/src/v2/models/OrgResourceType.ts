import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for organizations.
 */
export type OrgResourceType = typeof ORGS | UnparsedObject;
export const ORGS = "orgs";
