import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * ServiceNow ticket resource type
 */
export type ServiceNowTicketResourceType = typeof TICKETS | UnparsedObject;
export const TICKETS = "tickets";
