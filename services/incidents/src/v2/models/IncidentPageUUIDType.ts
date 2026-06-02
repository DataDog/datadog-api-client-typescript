import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for a page UUID response.
 */
export type IncidentPageUUIDType = typeof PAGE_UUID | UnparsedObject;
export const PAGE_UUID = "page_uuid";
