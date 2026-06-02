import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Salesforce incident template resource type.
 */
export type SalesforceIncidentsTemplateType =
  | typeof SALESFORCE_INCIDENTS_INCIDENT_TEMPLATE
  | UnparsedObject;
export const SALESFORCE_INCIDENTS_INCIDENT_TEMPLATE =
  "salesforce-incidents-incident-template";
