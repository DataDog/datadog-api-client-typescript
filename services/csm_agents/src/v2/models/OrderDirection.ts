import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The sort direction for results.
 */
export type OrderDirection = typeof ASC | typeof DESC | UnparsedObject;
export const ASC = "asc";
export const DESC = "desc";
