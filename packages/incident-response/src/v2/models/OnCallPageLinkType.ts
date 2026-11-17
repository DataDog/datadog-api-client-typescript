import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Page link resource type.
 */
export type OnCallPageLinkType = typeof LINKS | UnparsedObject;
export const LINKS = "links";
