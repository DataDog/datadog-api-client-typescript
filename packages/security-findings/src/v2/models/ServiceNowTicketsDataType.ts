import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * ServiceNow tickets resource type.
 */
export type ServiceNowTicketsDataType =
  | typeof SERVICENOW_TICKETS
  | UnparsedObject;
export const SERVICENOW_TICKETS = "servicenow_tickets";
