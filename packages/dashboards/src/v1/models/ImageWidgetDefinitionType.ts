import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the image widget.
 */
export type ImageWidgetDefinitionType = typeof IMAGE | UnparsedObject;
export const IMAGE = "image";
