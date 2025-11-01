import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident page ID type.
 */
export type IncidentPageIdType = typeof PAGE_UUID | UnparsedObject;
export const PAGE_UUID = "page_uuid";
