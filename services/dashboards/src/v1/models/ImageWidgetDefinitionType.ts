import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the image widget.
 */
export type ImageWidgetDefinitionType = typeof IMAGE | UnparsedObject;
export const IMAGE = "image";
