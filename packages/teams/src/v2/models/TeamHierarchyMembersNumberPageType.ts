import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Pagination mode.
 */
export type TeamHierarchyMembersNumberPageType =
  | typeof NUMBER_SIZE
  | UnparsedObject;
export const NUMBER_SIZE = "number_size";
