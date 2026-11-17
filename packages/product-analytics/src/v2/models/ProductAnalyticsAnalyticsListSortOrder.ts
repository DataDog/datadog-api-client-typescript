import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The direction rows are sorted in.
 */
export type ProductAnalyticsAnalyticsListSortOrder =
  | typeof ASC
  | typeof DESC
  | UnparsedObject;
export const ASC = "asc";
export const DESC = "desc";
