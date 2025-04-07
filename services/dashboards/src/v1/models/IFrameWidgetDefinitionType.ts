import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the iframe widget.
 */
export type IFrameWidgetDefinitionType = typeof IFRAME | UnparsedObject;
export const IFRAME = "iframe";
