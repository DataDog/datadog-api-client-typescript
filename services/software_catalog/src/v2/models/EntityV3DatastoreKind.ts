import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Datastore Kind object.
 */
export type EntityV3DatastoreKind = typeof DATASTORE | UnparsedObject;
export const DATASTORE = "datastore";
