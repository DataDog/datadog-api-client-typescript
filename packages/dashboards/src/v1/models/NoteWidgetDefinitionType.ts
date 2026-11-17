import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the note widget.
 */
export type NoteWidgetDefinitionType = typeof NOTE | UnparsedObject;
export const NOTE = "note";
