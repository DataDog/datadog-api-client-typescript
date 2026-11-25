import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type RelationalDataQueryDataSource =
  | typeof REFERENCE_TABLE
  | typeof MANAGED_RESOURCE
  | UnparsedObject;
export const REFERENCE_TABLE = "reference_table";
export const MANAGED_RESOURCE = "managed_resource";
