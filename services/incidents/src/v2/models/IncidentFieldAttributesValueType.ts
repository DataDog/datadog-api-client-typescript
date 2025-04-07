import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the multiple value field definitions.
 */
export type IncidentFieldAttributesValueType =
  | typeof MULTISELECT
  | typeof TEXTARRAY
  | typeof METRICTAG
  | typeof AUTOCOMPLETE
  | UnparsedObject;
export const MULTISELECT = "multiselect";
export const TEXTARRAY = "textarray";
export const METRICTAG = "metrictag";
export const AUTOCOMPLETE = "autocomplete";
