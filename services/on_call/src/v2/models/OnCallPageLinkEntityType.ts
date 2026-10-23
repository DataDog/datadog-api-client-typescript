import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of a resource linked to a page.
 */
export type OnCallPageLinkEntityType =
  | typeof CASE
  | typeof INCIDENT
  | typeof PAGE
  | typeof AGENT_CONVERSATION
  | UnparsedObject;
export const CASE = "case";
export const INCIDENT = "incident";
export const PAGE = "page";
export const AGENT_CONVERSATION = "agent_conversation";
