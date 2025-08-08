import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Items resource type.
 */
export type UpdateAppsDatastoreItemRequestDataType =
  | typeof ITEMS
  | UnparsedObject;
export const ITEMS = "items";
