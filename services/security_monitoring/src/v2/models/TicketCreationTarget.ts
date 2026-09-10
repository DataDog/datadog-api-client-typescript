import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The ticketing system to create tickets in.
 */
export type TicketCreationTarget =
  | typeof JIRA
  | typeof CASE_MANAGEMENT
  | typeof LINEAR
  | UnparsedObject;
export const JIRA = "jira";
export const CASE_MANAGEMENT = "case_management";
export const LINEAR = "linear";
