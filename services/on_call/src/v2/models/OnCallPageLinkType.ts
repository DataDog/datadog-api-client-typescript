import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Page link resource type.
 */
export type OnCallPageLinkType = typeof LINKS | UnparsedObject;
export const LINKS = "links";
