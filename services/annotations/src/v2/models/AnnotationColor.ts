import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Color used to render the annotation in the UI.
 */
export type AnnotationColor =
  | typeof GRAY
  | typeof BLUE
  | typeof PURPLE
  | typeof GREEN
  | typeof YELLOW
  | typeof RED
  | UnparsedObject;
export const GRAY = "gray";
export const BLUE = "blue";
export const PURPLE = "purple";
export const GREEN = "green";
export const YELLOW = "yellow";
export const RED = "red";
