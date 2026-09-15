import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the embedded app widget.
 */
export type EmbeddedAppWidgetDefinitionType =
  | typeof EMBEDDED_APP
  | UnparsedObject;
export const EMBEDDED_APP = "embedded_app";
