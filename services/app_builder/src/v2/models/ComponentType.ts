import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The UI component type.
 */
export type ComponentType =
  | typeof TABLE
  | typeof TEXTINPUT
  | typeof TEXTAREA
  | typeof BUTTON
  | typeof TEXT
  | typeof SELECT
  | typeof MODAL
  | typeof SCHEMAFORM
  | typeof CHECKBOX
  | typeof TABS
  | typeof VEGACHART
  | typeof RADIOBUTTONS
  | typeof NUMBERINPUT
  | typeof FILEINPUT
  | typeof JSONINPUT
  | typeof GRIDCELL
  | typeof DATERANGEPICKER
  | typeof SEARCH
  | typeof CONTAINER
  | typeof CALLOUTVALUE
  | UnparsedObject;
export const TABLE = "table";
export const TEXTINPUT = "textInput";
export const TEXTAREA = "textArea";
export const BUTTON = "button";
export const TEXT = "text";
export const SELECT = "select";
export const MODAL = "modal";
export const SCHEMAFORM = "schemaForm";
export const CHECKBOX = "checkbox";
export const TABS = "tabs";
export const VEGACHART = "vegaChart";
export const RADIOBUTTONS = "radioButtons";
export const NUMBERINPUT = "numberInput";
export const FILEINPUT = "fileInput";
export const JSONINPUT = "jsonInput";
export const GRIDCELL = "gridCell";
export const DATERANGEPICKER = "dateRangePicker";
export const SEARCH = "search";
export const CONTAINER = "container";
export const CALLOUTVALUE = "calloutValue";
