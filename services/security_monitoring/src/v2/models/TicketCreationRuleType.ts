import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for ticket creation rules.
 */
export type TicketCreationRuleType =
  | typeof TICKET_CREATION_RULES
  | UnparsedObject;
export const TICKET_CREATION_RULES = "ticket_creation_rules";
