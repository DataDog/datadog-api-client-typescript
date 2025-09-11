import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The organization access level for the datastore. For example, 'contributor'.
 */
export type CreateAppsDatastoreRequestDataAttributesOrgAccess =
  | typeof CONTRIBUTOR
  | typeof VIEWER
  | typeof MANAGER
  | UnparsedObject;
export const CONTRIBUTOR = "contributor";
export const VIEWER = "viewer";
export const MANAGER = "manager";
