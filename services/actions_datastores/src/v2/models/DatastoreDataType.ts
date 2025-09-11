import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for datastores.
 */
export type DatastoreDataType = typeof DATASTORES | UnparsedObject;
export const DATASTORES = "datastores";
