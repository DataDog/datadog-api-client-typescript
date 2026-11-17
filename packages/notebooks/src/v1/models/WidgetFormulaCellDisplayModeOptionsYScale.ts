import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Y scale for the cell display mode options.
 */
export type WidgetFormulaCellDisplayModeOptionsYScale =
  | typeof SHARED
  | typeof INDEPENDENT
  | UnparsedObject;
export const SHARED = "shared";
export const INDEPENDENT = "independent";
