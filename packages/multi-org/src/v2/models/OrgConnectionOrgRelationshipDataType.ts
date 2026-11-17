import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the organization relationship.
 */
export type OrgConnectionOrgRelationshipDataType = typeof ORGS | UnparsedObject;
export const ORGS = "orgs";
