import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sort direction.
 */
export type HeatgridSortOrder = typeof ASC | typeof DESC | UnparsedObject;
export const ASC = "asc";
export const DESC = "desc";
