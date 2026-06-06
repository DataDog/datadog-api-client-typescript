import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of Cloudcraft widget.
 */
export type CloudcraftWidgetDefinitionType = typeof CLOUDCRAFT | UnparsedObject;
export const CLOUDCRAFT = "cloudcraft";
