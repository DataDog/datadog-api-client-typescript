import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Persona filter for the `issue_stream` data source.
 */
export type ListStreamIssuePersona =
  | typeof ALL
  | typeof BROWSER
  | typeof MOBILE
  | typeof BACKEND
  | UnparsedObject;
export const ALL = "all";
export const BROWSER = "browser";
export const MOBILE = "mobile";
export const BACKEND = "backend";
