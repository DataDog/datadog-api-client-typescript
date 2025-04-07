import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The direction to sort by.
 */
export type UsageSortDirection = typeof DESC | typeof ASC | UnparsedObject;
export const DESC = "desc";
export const ASC = "asc";
