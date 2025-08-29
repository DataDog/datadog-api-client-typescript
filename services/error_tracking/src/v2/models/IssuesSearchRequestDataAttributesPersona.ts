import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Persona for the search. Either track(s) or persona(s) must be specified.
 */
export type IssuesSearchRequestDataAttributesPersona =
  | typeof ALL
  | typeof BROWSER
  | typeof MOBILE
  | typeof BACKEND
  | UnparsedObject;
export const ALL = "all";
export const BROWSER = "browser";
export const MOBILE = "mobile";
export const BACKEND = "backend";
