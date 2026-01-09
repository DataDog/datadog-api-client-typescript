import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status pages resource type.
 */
export type StatusPageDataType = typeof STATUS_PAGES | UnparsedObject;
export const STATUS_PAGES = "status_pages";
