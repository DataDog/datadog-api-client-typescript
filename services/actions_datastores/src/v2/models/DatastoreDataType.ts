import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Datastores resource type.
 */
export type DatastoreDataType = typeof DATASTORES | UnparsedObject;
export const DATASTORES = "datastores";
