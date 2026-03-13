import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type identifier for batch queries of reference table rows.
 */
export type BatchRowsQueryDataType =
  | typeof REFERENCE_TABLES_BATCH_ROWS_QUERY
  | UnparsedObject;
export const REFERENCE_TABLES_BATCH_ROWS_QUERY =
  "reference-tables-batch-rows-query";
