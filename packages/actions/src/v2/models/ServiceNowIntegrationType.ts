import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of the `ServiceNowIntegrationType` object.
 */
export type ServiceNowIntegrationType = typeof SERVICENOW | UnparsedObject;
export const SERVICENOW = "ServiceNow";
