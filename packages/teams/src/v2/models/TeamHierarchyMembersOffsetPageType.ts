import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Pagination mode.
 */
export type TeamHierarchyMembersOffsetPageType =
  | typeof OFFSET_LIMIT
  | UnparsedObject;
export const OFFSET_LIMIT = "offset_limit";
