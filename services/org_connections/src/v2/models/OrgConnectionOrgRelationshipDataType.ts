import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the organization relationship.
 */
export type OrgConnectionOrgRelationshipDataType = typeof ORGS | UnparsedObject;
export const ORGS = "orgs";
