import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type `pages`.
 */
export type OnCallPageDataType = typeof PAGES | UnparsedObject;
export const PAGES = "pages";
