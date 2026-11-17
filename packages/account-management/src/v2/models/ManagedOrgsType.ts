import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for managed organizations.
 */
export type ManagedOrgsType = typeof MANAGED_ORGS | UnparsedObject;
export const MANAGED_ORGS = "managed_orgs";
