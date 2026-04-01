import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The section in which the field appears: "what_happened" or "why_it_happened". When null, the field appears in the Attributes section.
 */
export type IncidentUserDefinedFieldCategory =
  | typeof WHAT_HAPPENED
  | typeof WHY_IT_HAPPENED
  | UnparsedObject;
export const WHAT_HAPPENED = "what_happened";
export const WHY_IT_HAPPENED = "why_it_happened";
