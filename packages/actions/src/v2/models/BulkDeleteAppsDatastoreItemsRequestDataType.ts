import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Items resource type.
 */
export type BulkDeleteAppsDatastoreItemsRequestDataType =
  | typeof ITEMS
  | UnparsedObject;
export const ITEMS = "items";
