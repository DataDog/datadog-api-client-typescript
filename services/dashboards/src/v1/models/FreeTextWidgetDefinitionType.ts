import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the free text widget.
 */
export type FreeTextWidgetDefinitionType = typeof FREE_TEXT | UnparsedObject;
export const FREE_TEXT = "free_text";
