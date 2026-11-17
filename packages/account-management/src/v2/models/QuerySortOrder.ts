import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Direction of sort.
 */
export type QuerySortOrder = typeof ASC | typeof DESC | UnparsedObject;
export const ASC = "asc";
export const DESC = "desc";
