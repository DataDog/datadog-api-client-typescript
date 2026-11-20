import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type PublishedDatasetProvider =
  | typeof DDSQL_QUERY
  | typeof NOTEBOOK_CELL
  | UnparsedObject;
export const DDSQL_QUERY = "ddsql_query";
export const NOTEBOOK_CELL = "notebook_cell";
