import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of an impact field.
 */
export type IncidentImpactFieldValueType =
  | typeof DROPDOWN
  | typeof TEXT
  | typeof TEXTARRAY
  | typeof METRICTAG
  | typeof NUMBER
  | typeof DATETIME
  | typeof MULTISELECT
  | UnparsedObject;
export const DROPDOWN = "dropdown";
export const TEXT = "text";
export const TEXTARRAY = "textarray";
export const METRICTAG = "metrictag";
export const NUMBER = "number";
export const DATETIME = "datetime";
export const MULTISELECT = "multiselect";
