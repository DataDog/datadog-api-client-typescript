import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for datastore items.
 */
export type DatastoreItemsDataType = typeof ITEMS | UnparsedObject;
export const ITEMS = "items";
