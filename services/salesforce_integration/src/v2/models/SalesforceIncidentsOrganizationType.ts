import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Salesforce organization resource type.
 */
export type SalesforceIncidentsOrganizationType =
  | typeof SALESFORCE_INCIDENTS_ORG
  | UnparsedObject;
export const SALESFORCE_INCIDENTS_ORG = "salesforce-incidents-org";
