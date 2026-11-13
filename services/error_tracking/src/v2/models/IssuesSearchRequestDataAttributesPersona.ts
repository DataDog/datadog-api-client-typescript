import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Persona for the search. Either `track` or `persona` must be specified.
 * Ignored if `track` is specified.
 */
export type IssuesSearchRequestDataAttributesPersona =
  | typeof ALL
  | typeof BROWSER
  | typeof MOBILE
  | typeof BACKEND
  | typeof AGENT
  | UnparsedObject;
export const ALL = "ALL";
export const BROWSER = "BROWSER";
export const MOBILE = "MOBILE";
export const BACKEND = "BACKEND";
export const AGENT = "AGENT";
