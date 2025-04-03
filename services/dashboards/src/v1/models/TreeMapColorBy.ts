import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * (deprecated) The attribute formerly used to determine color in the widget.
 */
export type TreeMapColorBy = typeof USER | UnparsedObject;
export const USER = "user";
