import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Organizations resource type.
 */
export type OrganizationsType = typeof ORGS | UnparsedObject;
export const ORGS = "orgs";
