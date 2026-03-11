import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The pagination type used for offset-based pagination.
 */
export type PaginationMetaPageType = typeof OFFSET_LIMIT | UnparsedObject;
export const OFFSET_LIMIT = "offset_limit";
