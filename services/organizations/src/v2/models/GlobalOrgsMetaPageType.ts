import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of global orgs pagination.
 */
export type GlobalOrgsMetaPageType = typeof CURSOR | UnparsedObject;
export const CURSOR = "cursor";
