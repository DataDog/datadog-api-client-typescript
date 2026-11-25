import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type IssueStreamPersona =
  | typeof ALL
  | typeof BROWSER
  | typeof MOBILE
  | typeof BACKEND
  | typeof AGENT
  | UnparsedObject;
export const ALL = "all";
export const BROWSER = "browser";
export const MOBILE = "mobile";
export const BACKEND = "backend";
export const AGENT = "agent";
