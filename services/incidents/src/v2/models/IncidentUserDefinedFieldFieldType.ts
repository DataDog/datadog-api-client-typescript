import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The data type of the field. 1=dropdown, 2=multiselect, 3=textbox, 4=textarray, 5=metrictag, 6=autocomplete, 7=number, 8=datetime.
 */
export type IncidentUserDefinedFieldFieldType =
  | typeof DROPDOWN
  | typeof MULTISELECT
  | typeof TEXTBOX
  | typeof TEXTARRAY
  | typeof METRICTAG
  | typeof AUTOCOMPLETE
  | typeof NUMBER
  | typeof DATETIME
  | UnparsedObject;
export const DROPDOWN = 1;
export const MULTISELECT = 2;
export const TEXTBOX = 3;
export const TEXTARRAY = 4;
export const METRICTAG = 5;
export const AUTOCOMPLETE = 6;
export const NUMBER = 7;
export const DATETIME = 8;
