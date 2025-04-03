import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the single value field definitions.
 */
export type IncidentFieldAttributesSingleValueType =
  | typeof DROPDOWN
  | typeof TEXTBOX
  | UnparsedObject;
export const DROPDOWN = "dropdown";
export const TEXTBOX = "textbox";
